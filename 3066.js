//3066. Minimum Operations to Exceed Threshold Value II
//Learned Heap 
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperations = function(nums, k) {
    let minQ = new MinPriorityQueue();
    for(let num of nums){
        minQ.enqueue(num);
    };
    let min = minQ.dequeue().element;
    let res = 0;
    while(min < k){
        let max = minQ.dequeue().element;
        minQ.enqueue((min * 2) + max);
        min = minQ.dequeue().element;
        res++;
    };
    return res;
};
