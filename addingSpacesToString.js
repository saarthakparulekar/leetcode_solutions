//Solved within 9 mins
/**
 * @param {string} s
 * @param {number[]} spaces
 * @return {string}
 */
var addSpaces = function(s, spaces) {
    let temp = '';
    let j = 0;
    for(let i = 0; i < s.length; i++){
        if(i == spaces[j]){
            temp += ' ';
            j++;
        }
        temp += s[i];
    }
    return temp;
};
