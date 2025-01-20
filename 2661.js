//2661. First Completely Painted Row or Column
//Solved with help but a pretty good problem
/**
 * @param {number[]} arr
 * @param {number[][]} mat
 * @return {number}
 */
var firstCompleteIndex = function(arr, mat) {
    let row = mat.length;
    let col = mat[0].length;
    let rowCount = new Array(row).fill(0);
    let colCount = new Array(col).fill(0);
    let pos = {};
    for(let i = 0; i < row; i ++){
        for(let j = 0; j < col; j++){
            pos[mat[i][j]] = [i,j];
        };
    };
    for(let i = 0; i < arr.length; i++){
        let [r,c] = pos[arr[i]];
        rowCount[r]++;
        colCount[c]++;
        if(rowCount[r] == col || colCount[c] == row){
            return i;
        };
    };
};
