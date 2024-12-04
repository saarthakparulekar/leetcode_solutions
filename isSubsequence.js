//Solved on own
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    let i = 0;
    let j = 0;
    if(t.length < s.length){
        return false;
    }
    while(i < s.length && j < t.length){
        if(s[i] == t[j]){
            i++;
            j++;
        }else{
            j++;
        }
    }
    return(i == s.length)
};
