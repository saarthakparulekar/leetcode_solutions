/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    
    if(s.length != t.length){
        return false;
    }
    let countS = {};
    let countT = {};
    for(let i = 0; i < s.length; i++){
        if(countS[s[i]] !== undefined){
            countS[s[i]] = 1 + countS[s[i]];
            
        } else {
            countS[s[i]] = 1;
        }
        if(countT[t[i]] !== undefined){
            countT[t[i]] = 1 + countT[t[i]];
            
        } else {
            countT[t[i]] = 1;
        }
    }
    for(let x in countS){
        if(countS[x] !== countT[x]){
            return false;
        }
    } return true; 
};
