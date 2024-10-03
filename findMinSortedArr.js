/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    let l = 0;
    let r = nums.length-1;
    let mid = 0;
    while(l < r){
        let mid = l + Math.floor((r-l)/2)
        if(nums[mid] > nums[r]){
            l = mid + 1
        }else if( nums[mid] < nums[r]){
            r = mid;
        }
    }
    return nums[l];
};
