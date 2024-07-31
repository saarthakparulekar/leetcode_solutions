//Works but can do better for sure
/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    let hashBox = {};
    //column
    for(let i = 0; i < 9; i++){
        let hashCol = {};
        for(let j = 0 ; j < 9; j++){
            let x = Math.floor(i/3);
            let y = Math.floor(j/3);
            if(hashBox[[x,y]] == undefined){
                hashBox[[x,y]] = [];
                if(board[i][j] != '.'){
                    hashBox[[x,y]].push(board[i][j]);
                }
            }else if(board[i][j] != '.'){
                let temp = hashBox[[x,y]];
                let val = board[i][j];
                if(temp.includes(val)){
                    return false;
                }else hashBox[[x,y]].push(board[i][j]);
            }
            if(board[i][j] != '.'){
                if(hashCol[board[i][j]] != undefined){
                    return false;
                }else hashCol[board[i][j]] = 1;
            }
        }
    }
    //row
    for(let j = 0; j < 9; j++){
        let hashRow = {};
        for(let i = 0 ; i < 9; i++){
            if(board[i][j] != '.'){
                if(hashRow[board[i][j]] != undefined){
                    return false;
                }else hashRow[board[i][j]] = 1;
            }
        }
    }
    

    return true;
};
