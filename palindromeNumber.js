/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
if(x < 0){
    return false;
};
let revNum = 0;
let num = x;
while(num > 0){
revNum = revNum * 10 + num % 10;
num = Math.floor(num / 10);
};
return(x - revNum == 0);
};
