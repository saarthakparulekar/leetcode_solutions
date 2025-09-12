//1793. Maximum Score of a Good Subarray (Hard)
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximumScore = function(nums, k) {
    let res = nums[k];
    let i = k;
    let j = k;
    let min = nums[k];
    while(i != 0 || j != nums.length - 1){
        if(i > 0 && j < nums.length - 1){
            if(nums[i - 1] > nums[j + 1]){
                i--;
                min = Math.min(nums[i], min);
            }else{
                j++;
                min = Math.min(nums[j], min);
            }
        }else if(i == 0 && j < nums.length - 1){
            j++;
            min = Math.min(nums[j], min);
        }else if(j == nums.length - 1 && i > 0){
            i--;
            min = Math.min(nums[i], min);
        };
        res = Math.max(res, min * ((j - i) + 1));
    };
    return res;
};
