//First DP
//Solved on own, Beats 100%
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    let dp = {};
    function dfs(curr){
        if(curr == n) return 1;
        if(curr > n) return 0;
        if(dp[curr] !== undefined)return dp[curr];
        dp[curr] = dfs(curr + 1) + dfs(curr + 2);
        return dp[curr];
    };
    return dfs(0);
};
