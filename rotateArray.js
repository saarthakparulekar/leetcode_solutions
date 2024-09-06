//Looks easy but tough to handle last testcase, had to use extra space to pass
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    k = k % nums.length
    let start = nums.length-k;
    let temp = nums.slice(start,nums.length);
    for(let i = 0; i < start;i++){
        temp.push(nums[i]);
    }
    for(let j = 0; j < nums.length;j++){
        nums[j] = temp[j];
    }
};
