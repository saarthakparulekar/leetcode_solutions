/**
 * @param {string} s
 * @return {boolean}
 */
var checkValidString = function(s) {
    let leftmax = 0;
    let leftmin = 0;
    for(let i of s){
        if(i == "("){
            leftmax++;
            leftmin++;
        }else if(i == ")"){
            leftmax--;
            leftmin--;
        }else if(i == "*"){
            leftmin --;
            leftmax ++;
        }

        if(leftmin < 0){
            leftmin = 0;
        }
        if(leftmax < 0){
            return false;
        }
    }
    return(leftmin == 0);
};
