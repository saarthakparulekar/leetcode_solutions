//Dynamic Programming
//2466. Count Ways To Build Good Strings
//Took help but understandable, needs revision

/**
 * @param {number} low
 * @param {number} high
 * @param {number} zero
 * @param {number} one
 * @return {number}
 */
var countGoodStrings = function(low, high, zero, one) {
    let mod = 10 ** 9 + 7;

    let dp = {};

    function dfs(length){
        if(length > high) return 0;
        
        if(dp[length] !== undefined) return dp[length];

        if(length >= low && length <= high){
            dp[length] = 1;
        }else dp[length] = 0;

        dp[length] += dfs(length + zero) + dfs(length + one);

        return dp[length] % mod;
    }

    return dfs(0);

};
