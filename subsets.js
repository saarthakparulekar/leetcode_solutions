/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    let result = [];
    let subset = [];
    let dfs = function(n){
        if(n == nums.length){
            result.push(subset.slice());
            return;
        };
        subset.push(nums[n]);
        dfs(n+1);
        subset.pop();
        dfs(n+1);
    };
    dfs(0);
    return result;
};
