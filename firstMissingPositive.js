/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
let smallest = 9999999;
let val = new Set(nums);
for(let i = 0; i < nums.length; i++){
    if(!val.has(1)){
        smallest = 1;
    }
    if(nums[i] > 0){
        if(!val.has(nums[i]-1)){
            if(nums[i]-1 != 0 && nums[i]-1 < smallest){
                smallest = nums[i] - 1;
            }
        } 
         if(!val.has(nums[i]+1)){
           if(nums[i]+1 < smallest){
                smallest = nums[i] + 1;
           }
        };
    };
};
return smallest;
};
