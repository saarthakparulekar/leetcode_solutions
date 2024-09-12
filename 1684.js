//Count the Number of Consistent Strings
//Solved on own but this is without bit manipulation

/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function(allowed, words) {
    let hash = {};
    let count = 0;
    for(let str of allowed){
        hash[str] = 1;
    }
    for(let str of words){
        let val = str;
        let res = 0;
        for(let char of val){
            if(hash[char]==undefined){
                res++;
            }
        }
        if(res == 0){
            count++;
        }
    }
    return count;
};
