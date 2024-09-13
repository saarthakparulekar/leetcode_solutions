//Took time, saw some tutorials but solved it at the end
//Would help to revise again

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    if(s1.length > s2.length)return false
    let hash = {};
    for(let char of s1){
        if(hash[char] == undefined){
            hash[char] = 1;
        }else hash[char]++;
    }

    let i = 0;
    let j = 0;
    let required = s1.length;

    while(j < s2.length){
        if(hash[s2[j]] > 0) required--;
        hash[s2[j]]--;
        j++;

        if(required === 0)return true;

        if(j-i == s1.length){
            if(hash[s2[i]] >= 0){
                required++;
            }
            hash[s2[i]]++;
            i++;
        }
    }

    return false;
};
