/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canSortArray = function(nums) {
    let bits = function(n){
        let res = 0;
        while(n){
            res += n & 1;
            n = n >> 1;
        }
        return res;
    }
    let curMax = nums[0];
    let curMin = nums[0];
    let prevMax = -Infinity;
    for(let i of nums){
        if(bits(curMin) == bits(i)){
            curMax = Math.max(curMax, i);
            curMin = Math.min(curMin, i);
        }else{
            if(curMin < prevMax){
                return false
            }
            prevMax = curMax;
            curMax = i;
            curMin = i;
        }
    }
    if(curMin < prevMax){
        return false
    }else return true
};
