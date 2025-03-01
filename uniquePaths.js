// Solved on own
// 2-D Dynamic Programming
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    let memo = new Array(m).fill(null).map(()=> new Array(n).fill(0));

    function dp(step1, step2){
        if(step1 == m-1 && step2 == n-1){
            return 1;
        }
        if(step1 == m || step2 == n){
            return 0;
        }
        if(memo[step1][step2] !== 0){
            return memo[step1][step2];
        };

        memo[step1][step2] = dp(step1 + 1, step2) + dp(step1, step2 + 1);

        return memo[step1][step2];
    };

    return dp(0,0);
};
