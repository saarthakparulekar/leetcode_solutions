//Took some time, had to do debugging but solved on own in 15 mins
//Not good for an easy problem
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    let i = 0;
    let res = -Infinity;
    let sum = 0;
    if(nums.length == 1){
        return Number(nums[0].toFixed(5));
    }
    for(let j = 0; j < nums.length; j++){
        sum += nums[j];
        if(j >= k-1){
            res = Math.max(res, sum / k);
            sum -= nums[i];
            i++;
        }
    }
    return Number(res.toFixed(5));
};
