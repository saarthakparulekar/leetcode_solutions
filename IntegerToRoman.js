//Solved on own but redundant code
//Solved with help and optimal

/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    let hash = [
        [1000 ,'M'],[900 ,'CM'],[500 , 'D'],[400 , 'CD'],[100 , 'C'],[90 ,'XC'],[50 , 'L'],
        [40 , 'XL'],[10 , 'X'],[9 , 'IX'],[5 , 'V'],[4 , 'IV'],[1 , 'I']
    ];
    let res = '';
    for(let i of hash){
        while(num >= i[0]){
            res += i[1];
            num -= i[0];
        }
    }
    return res;
    
};
