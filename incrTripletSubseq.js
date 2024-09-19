//Had to look over solution 

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function(nums) {
    let prev1 = Infinity;
    let prev2 = Infinity;
    let i = 0;
    while(i < nums.length){
        if(nums[i] > prev2 && prev2 > prev1){
            return true
        }
        if(nums[i] > prev1){
            prev2 = nums[i];
        }else prev1 = nums[i];
        i++;
    }
    return false
};
