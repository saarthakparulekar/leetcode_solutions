//The IF conditions are necessary to tackle problems where matrix is not square
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    let res = [];
    let n = matrix[0].length
    let m = matrix.length
    let startCol = 0;
    let endCol = n-1;
    let startRow = 0;
    let endRow = m-1;

    while(startCol <= endCol && startRow <= endRow){
        for(let i = startCol; i <= endCol; i++){
            res.push(matrix[startRow][i]);
        }
        startRow++;
        for(let i = startRow; i <= endRow; i++){
            res.push(matrix[i][endCol]);
        }
        endCol--;
        if(startRow <= endRow){
        for(let i = endCol; i >= startCol; i--){
            res.push(matrix[endRow][i]);
        }
        endRow--;
        }
        if(startCol <= endCol){
        for(let i = endRow; i >= startRow; i--){
            res.push(matrix[i][startCol]);
        }
        startCol++;
        }
    }

    return res;
};
