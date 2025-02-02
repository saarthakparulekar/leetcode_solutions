//1752. Check if Array Is Sorted and Rotated
//Took help

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var check = function(nums) {
    let rotatePoint = 0;
    for(let i = 0; i < nums.length; i++){
        if(i == nums.length - 1){
            if(nums[i] > nums[0]){
                rotatePoint++;
            }
        }else if(nums[i] > nums[i+1]){
            rotatePoint++;
        };
    };
    return rotatePoint <= 1
};
