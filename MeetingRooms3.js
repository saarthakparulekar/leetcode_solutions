//2402. Meeting Rooms III (Hard)
//Took quite a lot of time but was worth it, took some help of chatGPT to fix errors
/**
 * @param {number} n
 * @param {number[][]} meetings
 * @return {number}
 */
var mostBooked = function(n, meetings) {
    meetings.sort((a,b) => a[0] - b[0]);
    
    let res = new Array(n).fill(0);

    //[time, index];
    let busyRoom = new PriorityQueue((a,b) => {
        if(a[0] != b[0]){
            return a[0] - b[0];
        }else{
            return a[1] - b[1];
        }
    });

    let emptyRoom = new MinPriorityQueue();
    for(let i = 0; i < n; i++){
        emptyRoom.enqueue(i);
    };

    for(let [s,e] of meetings){
        while(!busyRoom.isEmpty() && busyRoom.front()[0] <= s){
            let [val, room] = busyRoom.dequeue();
            emptyRoom.enqueue(room);
        }
        if(!emptyRoom.isEmpty()){
            let r = emptyRoom.dequeue();
            res[r]++;
            busyRoom.enqueue([e, r]);
        }else{
            let [curT, curR] = busyRoom.dequeue();
            curT += (e-s);
            res[curR]++;
            busyRoom.enqueue([curT, curR]);
        }
    };

    let max = 0;
    let room  = 0;
    for(let i = 0; i < res.length; i++){
        if(res[i] > max){
            max = res[i];
            room = i;
        };
    };
    return room;
};
