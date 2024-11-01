//Took help still good

/**
 * @param {string} s
 * @return {string}
 */
var makeFancyString = function(s) {
    let res = [];
    let count = 1;
    for(let i = 0; i < s.length; i++){
        if(s[i] == s[i-1]){
            count++;
        }else{
            count = 1;
        }

        if(count <= 2){
            res.push(s[i]);
        }
    }
    return res.join('')
};
