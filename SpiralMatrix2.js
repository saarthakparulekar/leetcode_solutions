/**
//SOLVED ON OWN AND WITHIN 9 MINUTES ON LEETCODE
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
    let result = [];
    for(let i = 0; i < n; i++){
        result.push([]);
    }
    let counter = 1;
    let startCol = 0;
    let endCol = n-1;
    let startRow = 0;
    let endRow = n-1;

    while(startCol <= endCol && startRow <= endRow){
        for(let i = startCol; i <= endCol; i++){
            result[startRow][i] = counter;
            counter++;
        }
        startRow++;

        for(let i = startRow; i <= endRow; i++){
            result[i][endCol] = counter;
            counter++;
        }
        endCol--;

        for(let i = endCol; i >= startCol; i--){
            result[endRow][i] = counter;
            counter++;
        }
        endRow--;

        for(let i = endRow; i >= startRow; i--){
            result[i][startCol] = counter;
            counter++;
        }
        startCol++;
    }
    return result;
};
