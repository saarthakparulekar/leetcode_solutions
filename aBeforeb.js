/**
 * @param {string} s
 * @return {boolean}
 */
var checkString = function(s) {
    for(let i = 0; i < s.length; i++){
        if(s[i] == 'a' && s[i-1] =='b'){
            return false;
        }
    }
    return true;
};
//Shortest but not fastest
/**
 * @param {string} s
 * @return {boolean}
 */
var checkString = function(s) {
    return !s.includes('ba');
};
