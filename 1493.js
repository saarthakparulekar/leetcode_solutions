//1493. Longest Subarray of 1's After Deleting One Element
//Solved on own, beats 100%
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function(nums) {
    let i = 0;
    let pointer = false;
    let longest = 0;
    for(let j = 0; j < nums.length; j++){
        if(nums[j] === 1){
            longest = Math.max(longest, j-i);
        }else if(nums[j] === 0 && pointer === false){
            longest = Math.max(longest, j-i);
            pointer = j;
        }else{
            i = pointer + 1;
            pointer = j;
        }
    }
    return longest;
};
