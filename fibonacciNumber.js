//Recursion

/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    let memo = {};
    function fibo(n){
        if(n <= 1){
            return n
        };
        if(memo[n] != undefined){
            return memo[n];
        };
        memo[n] = fibo(n-1) + fibo(n-2);
        return memo[n];
    };
    return fibo(n);
};


//Iterative

/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    if(n <= 1) return n;
    let a = 0;
    let b = 1;
    let res = 0;
    for(let i = 1; i < n; i++){
        res = a + b;
        a = b;
        b = res;
    };
    return res;
};
