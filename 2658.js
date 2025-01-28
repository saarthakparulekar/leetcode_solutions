//2658. Maximum Number of Fish in a Grid
//Took help of ChatGPT for debugging, rest intuition was perfect
//Graph DFS
//Took 30 minutes to solve
/**
 * @param {number[][]} grid
 * @return {number}
 */
var findMaxFish = function(grid) {
    let directions = [[0,1],[1,0],[0,-1],[-1,0]];
    let row = grid.length;
    let col = grid[0].length;
    let result = 0;
    function dfs(r,c){
        if(grid[r][c] == 0) return 0;
        let total = grid[r][c];
        grid[r][c] = 0;
        for(let [R,C] of directions){
            let curR = r + R;
            let curC = c + C;
            if(curR >= 0 && curC >= 0 && curR < row && curC < col && grid[curR][curC] > 0){
                total += dfs(curR,curC);
            };
        };
        return total;
    };
    for(let i = 0; i < row; i++){
        for(let j = 0; j < col; j++){
            if(grid[i][j] != 0){
                let fish = dfs(i,j);
                result = Math.max(result, fish);
            };
        };
    };
    return result;
};
