//Not the optimal code but works, need to look over it again
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let val = s.split(' ').reverse();
    while(val.includes('')){
        for(let i = 0; i < val.length;i++){
            if(val[i] == ''){
                val.splice(i,1);
            }
        };
    };
    return val.join(' ')

};
