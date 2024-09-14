//Longest Subarray with Maximum Bitwise AND

//Took 40 minutes T_T
//But solved completely on own and beats 75%

/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function(nums) {
    
    let max = 0;
    let len = 0;
    let maxlen = 0;
    for(let i = 0; i < nums.length; i++){
        if(nums[i] > max){
            max = nums[i];
            maxlen = 1;
            len = 1;
        }else if(nums[i] == max && nums[i] == nums[i-1]){
            len++;
            maxlen = Math.max(maxlen, len)
        }else{
            len = 1;
        }
    }
    return maxlen;
};
