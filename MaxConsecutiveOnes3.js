//Solved on own, in exact 14 min, optimal
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function(nums, k) {
    let max = 0;
    let count = 0;
    let i = 0;
    for(let j = 0; j < nums.length; j++){
        if(nums[j] === 1){
            max = Math.max(max, j-i+1);
        }else if(nums[j] === 0 && count < k){
            count++;
            max = Math.max(max, j-i+1);
        }else if(nums[j] === 0 && count == k){
            while(nums[i] !== 0){
                i++;
            }
            i++;
        }
    }
    return max;
};
