//1400. Construct K Palindrome Strings
//Took the help of hints, but learned something new
/**
 * @param {string} s
 * @param {number} k
 * @return {boolean}
 */
var canConstruct = function(s, k) {
    if(s.length < k)return false;
    let hash = {};
    for(let char of s){
        hash[char] = (hash[char] || 0) + 1;
    };
    oddCount = 0
    for(let key in hash){
        if(hash[key] % 2 !== 0){
            oddCount++;
        };
    };
    if(oddCount > k){
        return false
    }else return true;
};
