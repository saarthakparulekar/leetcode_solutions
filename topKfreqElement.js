/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let hash = new Map();
    let arr = new Array(nums.length + 1).fill(0);
    let ans = [];
   nums.forEach(el => {
        const val = hash.get(el) || 0;
        hash.set(el, val + 1);
    });
    for ( let [key, value] of hash ) {
        const prev = arr[value] || [];
        prev.push(key);
        arr[value] = prev;
    };
     arr.reverse();
    for (let el of arr) {
        if (k < 1) break;
        if (el) {
            for (let el2 of el) {
                ans.push(el2);
                k--;
            };
        };
    };
    return ans;
};
