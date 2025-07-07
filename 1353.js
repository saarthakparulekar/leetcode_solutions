//1353. Maximum Number of Events That Can Be Attended
//Good problem but difficult to understand at first
/**
 * @param {number[][]} events
 * @return {number}
 */
var maxEvents = function(events) {
    let maxDay = 0;
    for(let [s,e] of events){
        maxDay = Math.max(maxDay, e);
    };
    
    events.sort((a,b) => a[0] - b[0]);
    let pq = new MinPriorityQueue();
    let res = 0;

    for(let i = 1, j = 0; i <= maxDay; i++){
        while(j < events.length && events[j][0] <= i){
            pq.enqueue(events[j][1]);
            j++;
        };
        while(!pq.isEmpty() && pq.front() < i){
            pq.dequeue();
        };
        if(!pq.isEmpty()){
            res++;
            pq.dequeue();
        };
    };

    return res;
};
