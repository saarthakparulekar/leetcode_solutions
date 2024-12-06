//2554. Maximum Number of Integers to Choose From a Range I
//Medium solved under 5 mins
/**
 * @param {number[]} banned
 * @param {number} n
 * @param {number} maxSum
 * @return {number}
 */
var maxCount = function(banned, n, maxSum) {
    let sum = 0;
    let res = 0
    let ban = new Set(banned);
    for(let i = 1; i <= n; i++){
        if(!ban.has(i)){
            sum += i;
            if(sum <= maxSum){
                res++;
            }else return res;
        }
    }
    return res;
};
