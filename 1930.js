//1930. Unique Length-3 Palindromic Subsequences
//Took help
/**
 * @param {string} s
 * @return {number}
 */
var countPalindromicSubsequence = function(s) {
    let first = {};
    let last = {};
    for(let i = 0; i < s.length; i++){
        if(first[s[i]] == undefined){
            first[s[i]] = i;
        }
        last[s[i]] = i;
    };
    let res = 0;
    let chars = Object.keys(first);
    for(let key of chars){
        let set = new Set();
        for(let i = first[key] + 1; i < last[key]; i++){
            set.add(s[i]);
        };
        res += set.size;
    };
    return res;
};
