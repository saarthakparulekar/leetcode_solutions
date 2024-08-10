//for loop

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    for(let i = 0; i < nums.length; i++){
        if(nums[i] == val){
            nums.splice(i,1);
            i--;
        }
    }
    return nums.length;
};

//while loop

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    while(nums.includes(val)){
        let i = nums.indexOf(val);
        nums.splice(i,1);
    }
    return nums.length;
};
