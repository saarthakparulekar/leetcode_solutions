//33. Search in Rotated Sorted Array
//Binary Search
//Took help, confusing problem
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let l = 0;
    let r = nums.length - 1;
    while(l <= r){
        let mid = l + Math.floor((r-l)/2);
        if(nums[mid] == target){
            return mid;
        };
        if(nums[l] <= nums[mid]){
            if(nums[mid] < target || nums[l] > target){
                l = mid + 1;
            }else{
                r = mid - 1;
            }
        }else{
            if(nums[mid] > target || nums[r] < target){
                r = mid - 1;
            }else{
                l = mid + 1;
            }
        }
    }
    return -1;
};
