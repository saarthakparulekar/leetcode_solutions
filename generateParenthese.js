//Solved with a lil bit a help, under 6 mins
//Should be solved again

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    let res = [];
    
    function generate(open, close, par){
        if(open == close && open+close == n*2){
            res.push(par)
        }
        if(open < n){
            generate(open+1,close,par + '(');
        }
        if(close < open){
            generate(open,close+1,par + ')');
        }
    }

    generate(0,0,'');
    return res;
};
