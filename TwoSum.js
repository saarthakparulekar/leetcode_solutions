/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let visited = {};

    for(let i = 0; i < nums.length; i++){
    
    let secondVal = target - nums[i];
    
    if (visited[secondVal] !== undefined) {
        return [visited[secondVal],i];
    } else {
        visited[nums[i]] = i;
    }
}
};

//The Runtime was 48ms
