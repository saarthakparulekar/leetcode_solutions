//Longest Repeating Character Replacement
//Runtime is good, can maybe do better

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
    let i = 0;
    let hash = {};
    let max = 0;
    let res = 0
    for(let j = 0; j < s.length; j++){
        if(hash[s[j]] == undefined){
            hash[s[j]] = 1;
        }else hash[s[j]]++;
        let val = Object.keys(hash);
        for(let x of val){
            let temp = x;
            max = Math.max(hash[temp],max);
        }
        let currSize = (j - i) + 1;
        if((currSize - max) <= k){
            res = Math.max(currSize,res);
        }else{
            hash[s[i]]--;
            i++;
        }
    }
    return res;
};
