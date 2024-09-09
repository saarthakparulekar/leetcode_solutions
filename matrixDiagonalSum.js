//Took help, can do better!!!!
/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function(mat) {
    let result = 0;
    let n = mat.length;
    for(let i = 0; i < n; i++){
        result += mat[i][i];
        if(i != n-i-1){
            result += mat[i][n-i-1];
        }
    }
    return result;
};
