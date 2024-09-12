/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function(a, b) {
    while(b){
        let temp = a ^ b;
        b = a & b;
        b = b << 1;
        a = temp;
    }
    return a;
};
