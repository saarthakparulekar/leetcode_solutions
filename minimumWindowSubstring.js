//Code on own, intuition from neetcode

/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    if(t == '' || s.length < t.length) return '';
    let res = [-1,-1];
    let min = Infinity;
    
    let hashS = {};
    let hashT = {};
    for(let char of t){
        if(hashT[char] == undefined){
            hashT[char] = 1;
        }else hashT[char]++;

        if(hashS[char] == undefined)hashS[char] = 0;
    }

    let state = 0;
    let need = Object.keys(hashT).length;

    let i = 0;
    for(let j = 0; j < s.length; j++){
        let curr = s[j];
        if(hashS[curr] !== undefined){
            hashS[curr]++;
            if(hashS[curr] === hashT[curr]){
                state++;
            }
        };
        while(state == need){
            if((j-i) + 1 < min){
                min = (j-i) + 1;
                res = [i,j];
            }
            if(hashS[s[i]] !== undefined){
                hashS[s[i]]--;
                if(hashS[s[i]] < hashT[s[i]]){
                    state--;
                };
            }
            i++;
        }
    }
    return s.slice(res[0],res[1]+1)
};
