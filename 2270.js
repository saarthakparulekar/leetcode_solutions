//2270. Number of Ways to Split Array
//Solved on own
//prefix sum

/**
 * @param {number[]} nums
 * @return {number}
 */
var waysToSplitArray = function(nums) {
    let leftSum = 0;
    let rightSum = 0;
    let result = 0;
    for(let num of nums){
        rightSum += num;
    };
    for(let i = 0; i < nums.length - 1; i++){
        leftSum += nums[i];
        rightSum -= nums[i];
        if(leftSum >= rightSum){
            result++;
        }
    };
    return result;
};
