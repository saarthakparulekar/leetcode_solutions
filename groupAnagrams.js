/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let hash = {};
    for(let s of strs){
        let count = Array(26).fill(0);
        for(let char of s){
            count[char.charCodeAt(0) - 'a'.charCodeAt(0)]++;
        }
        if(hash[count] == undefined){
            hash[count] = Array();
            hash[count].push(s);
        } else {
            hash[count].push(s);
        }
    }
    return Object.values(hash);
};
