//Solved on own and timed, Time was : 5 minutes and 49 seconds 

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let unq = 1;
    let currUnq = 1;
    for(let i = 1; i< nums.length; i++){
        if(nums[i] == nums[i-1]){
            if(currUnq < 2){
                nums[unq] = nums[i];
                unq++;
                currUnq++;
            }
        }else if(nums[i] != nums[i-1]){
            nums[unq] = nums[i];
            unq++;
            currUnq = 1;
        }
    }
    return unq;
};
