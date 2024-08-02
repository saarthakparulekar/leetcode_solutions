//Can do better, but still good
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    let result = []
    nums.sort((a,b) => a-b);
    for(let i = 0; i < nums.length; i++){
        let target = -nums[i];
        let j = i+1;
        let k = nums.length-1;
        while( j < k && nums[i] != nums[i-1]){
            if( nums[j] + nums[k] == target){
                result.push([nums[j],nums[k],nums[i]]);
                while(nums[j] == nums[j+1]){
                    j++;
                };
                while(nums[k] == nums[k-1]){
                    k--;
                }
                j++;
                k--;
            }else if(nums[j] + nums[k] > target){
                k--;
            }else{
                j++;
            }
        }
    }
    return result;
};
