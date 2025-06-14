//2566. Maximum Difference by Remapping a Digit
/**
 * @param {number} num
 * @return {number}
 */
var minMaxDifference = function(num) {
    let str = String(num);
    let maxdig;
    let mindig;
    let maxVal = [];
    let minVal = [];
    for(let s of str){
        if(maxdig == undefined && s != '9'){
            maxdig = s;
            maxVal.push('9'); 
        }else if(s == maxdig){
            maxVal.push('9');
        }else{
            maxVal.push(s);
        }

        if(mindig == undefined && s != '0'){
            mindig = s;
            minVal.push('0'); 
        }else if(s == mindig){
            minVal.push('0');
        }else{
            minVal.push(s);
        }
    }
    let max = Number(maxVal.join(''));
    let min = Number(minVal.join(''));
    return max - min;
};
