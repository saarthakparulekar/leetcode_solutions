//1456. Maximum Number of Vowels in a Substring of Given Length
//Solved on own (in 14 mins)
//Sliding window, hash-map
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function(s, k) {
    let max = 0;
    let i = 0;
    let j = 0;
    let count = 0;
    let vowels = {
        'a': 1,
        'e': 1,
        'i': 1,
        'o': 1,
        'u': 1,
    };
    while(j < s.length){
        if(j < k){
            if(vowels[s[j]]){
                count++;
            };
            max = Math.max(max,count);
            j++;
        }else{
            if(vowels[s[j]]){
                count++;
            }
            if(vowels[s[i]]){
                count--;
            }
            j++;
            i++;
            max = Math.max(max,count);
        }
        if(max == k){
            return max;
        }
    }
    return max;
};
