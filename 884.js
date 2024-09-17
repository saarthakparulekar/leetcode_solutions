//884. Uncommon Words from Two Sentences
//Solved in 25 mins, on own and beats 97%

/**
 * @param {string} s1
 * @param {string} s2
 * @return {string[]}
 */
var uncommonFromSentences = function(s1, s2) {
    let char1 = s1.split(' ');
    let char2 = s2.split(' ');
    let hash = {};
    let i = 0;
    while(i < char1.length || i < char2.length){
        if(i < char1.length){
            if(hash[char1[i]] == undefined){
                hash[char1[i]] = 1;
            }else hash[char1[i]]++;
        }
        if(i < char2.length){
            if(hash[char2[i]] == undefined){
                hash[char2[i]] = 1;
            }else hash[char2[i]]++;
        }
        i++;
    }
    
    let key = Object.keys(hash);

    for(let k of key){
        let curr = k;
        if(hash[curr] > 1){
            delete hash[curr];
        }
    }
    
    return Object.keys(hash)
};
