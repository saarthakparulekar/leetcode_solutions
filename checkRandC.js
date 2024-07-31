/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
var checkValid = function(matrix) {
    for(let i = 0; i < matrix.length; i++){
        let row = {};
        for(let j = 0; j < matrix.length; j++){
            if(row[matrix[i][j]] == undefined){
                row[matrix[i][j]] = 1;
            }else return false;
        }
    }
    for(let j = 0; j < matrix.length; j++){
        let row = {};
        for(let i = 0; i < matrix.length; i++){
            if(row[matrix[i][j]] == undefined){
                row[matrix[i][j]] = 1;
            }else return false;
        }
    }
    return true;
};
