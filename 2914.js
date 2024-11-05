//2914. Minimum Number of Changes to Make Binary String Beautiful
//Only care about even substrings i.e groups of two 
/**
 * @param {string} s
 * @return {number}
 */
var minChanges = function(s) {
    let l = 0;
    let r = 1;
    let count = 0;
    while(r < s.length){
        if(s[l] !== s[r])count++;
        l += 2;
        r += 2;
    }
    return count;
};
