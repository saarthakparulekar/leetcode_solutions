/**
 * @param {number[]} original
 * @param {number} m
 * @param {number} n
 * @return {number[][]}
 */
var construct2DArray = function(original, m, n) {
    let temp = 0;
    let result = [];
    if(m*n == original.length){
        while(temp != original.length){
            let arr = original.splice(temp,n);
            result.push(arr);
        }
        return result;
    }else{
        return [];
    }
};
