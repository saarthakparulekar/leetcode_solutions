//3423. Maximum Difference Between Adjacent Elements in a Circular Array
//Solved on  own
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAdjacentDistance = function(nums) {
    let res = Math.abs(nums[nums.length -1] - nums[0]);
    for(let i = 0; i < nums.length - 1; i++){
        let diff = Math.abs(nums[i] - nums[i + 1]);
        res = Math.max(res, diff);
    }
    return res;
};
