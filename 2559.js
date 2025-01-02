//2559. Count Vowel Strings in Ranges
//Solved on own
/**
 * @param {string[]} words
 * @param {number[][]} queries
 * @return {number[]}
 */
var vowelStrings = function(words, queries) {
    let vowel = ['a','e','i','o','u'];
    let hash = [];
    let count = 0;
    for(let i = 0; i < words.length; i++){
        let word = words[i];
        if(vowel.includes(word[0]) && vowel.includes(word[word.length-1])){
            count++;
        }
        hash.push(count);
    }
    let res = [];
    for(let [l,r] of queries){
        let sum = 0
        if (l == 0){
            sum = hash[r];
        }else {
            sum = hash[r] - hash[l-1];
        }
        res.push(sum);
    }
    return res;
};
