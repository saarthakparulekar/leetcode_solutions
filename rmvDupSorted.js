//Using two pointer
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let unq  = 1;
    for(let i = 1; i < nums.length; i++){
        if(nums[i] != nums[i-1]){
            nums[unq] = nums[i];
            unq++;
        }
    }
    return unq;
};

//using for loop 
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    for(let i = 0; i < nums.length; i++){
        if(nums[i] == nums[i+1]){
            nums.splice(i,1);
            i--;
        }
    }
    return nums.length;
};
