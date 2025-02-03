//3105. Longest Strictly Increasing or Strictly Decreasing Subarray
//Solved on own
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestMonotonicSubarray = function(nums) {
    let res = 1;
    let incr = 1;
    let dcr = 1;
    for(let j = 0; j < nums.length-1; j++){
        if(nums[j] > nums[j+1]){
            incr++;
            dcr = 1;
            res = Math.max(res,incr)
        }else if(nums[j] < nums[j+1]){
            dcr++;
            incr = 1;
            res = Math.max(res,dcr)
        }else{
            incr = 1;
            dcr = 1;
        };
    };
    return res;
};
