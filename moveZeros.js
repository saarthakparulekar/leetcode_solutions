//Not a great code, but works
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let i = 0;
    let zeroCount = 0;
    while(i < nums.length){
        if(nums[i] == 0){
            nums.splice(i,1);
            nums.push(0);
            zeroCount++;
        }else i++;
        if(i + zeroCount > nums.length){
            break;
        }
    }
};
