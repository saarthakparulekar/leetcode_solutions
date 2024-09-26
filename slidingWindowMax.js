//Solved in 2 minutes
//Took help but still solved on own 

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
    let i = 0;
    let j = 0;
    let q = [];
    let res = [];
    while(j < nums.length){
        while(q && nums[q[q.length-1]] < nums[j]){
            q.pop();
        }
        q.push(j);
        if(i > q[0]){
            q.shift();
        }
        if(j+1 >= k){
            res.push(nums[q[0]]);
            i++;
        }
        j++;
    }
    return res;
};
