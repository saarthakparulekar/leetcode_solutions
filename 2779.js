//2779. Maximum Beauty of an Array After Applying Operation
//Solved with the help of hints but still quite good
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximumBeauty = function(nums, k) {
    nums.sort((a,b)=>a-b);
    let i = 0;
    let j = 1;
    let max = 1;
    while(j < nums.length){
        if((nums[j] - nums[i]) <= 2 * k){
            j++;
            max = Math.max(max, j-i);
        }else i++;
    }
    return max;
};
