//2016. Maximum Difference Between Increasing Elements
/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumDifference = function(nums) {
    let min = Infinity;
    let diff = -1;
    for(let num of nums){
        if(num > min){
            diff = Math.max(diff, (num - min));
        }else if(num < min){
            min = num;
        }
    }
    return diff;
};
