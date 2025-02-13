//973. K Closest Points to Origin
//Solved on own
/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function(points, k) {
    let minQ = new MinPriorityQueue();
    let hash = {};
    for(let [x,y] of points){
        let d = (x * x) + (y * y);

        if(hash[d] == undefined){
            hash[d] = [[x,y]];
        }else hash[d].push([x,y]);

        minQ.enqueue(d);
    };
    let res = [];
    while(k > 0){
        let temp = minQ.dequeue().element;
        res.push(hash[temp].pop())
        k--;
    };
    return res;
};
