//3223. Minimum Length of String After Operations

//Solved completely on own, without any hints or vid
//Solved within 3 minutes
/**
 * @param {string} s
 * @return {number}
 */
var minimumLength = function(s) {
    let hash = {};
    for(let char of s){
        hash[char] = (hash[char] || 0) + 1;
        if(hash[char] == 3){
            hash[char] -= 2;
        };
    };
    let res = 0;
    for(let key in hash){
        res += hash[key];
    };
    return res;
};
