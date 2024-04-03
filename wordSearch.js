/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    let row = board.length;
    let col = board[0].length;
    
    let dfs = function(r,c,i){
        if(i == word.length)return true;

        if(r < 0 || c < 0 || r >= row || c >= col ||
        word[i] != board[r][c])return false;

        const temp = board[r][c];
        board[r][c] = '\0';

        let result = dfs(r+1,c,i+1)||
                    dfs(r-1,c,i+1)||
                    dfs(r,c+1,i+1)||
                    dfs(r,c-1,i+1);
        
        board[r][c] = temp; 

        return result;
    }
    for(let r = 0; r < row; r++){
        for(let c = 0; c < col; c++){
            if(dfs(r,c,0))return true;
        }
    }
    return false;
};
