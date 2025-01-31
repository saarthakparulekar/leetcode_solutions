//Solved on own
//Graph - Medium
/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    let row = grid.length;
    let col = grid[0].length;
    let directions = [[0,1],[1,0],[0,-1],[-1,0]]
    let islandId = 2;
    function countIsland(i,j){
        let q = [[i,j]];
        grid[i][j] = islandId;
        while(q.length > 0){
            let [r,c] = q.shift();
            for(let [dr,dc] of directions){
                let curR = r + dr;
                let curC = c + dc;
                if(curR >= 0 && curC >= 0 && curR < row && curC < col && grid[curR][curC] == 1){
                    grid[curR][curC] = islandId;
                    q.push([curR,curC]);
                };
            };
        };
        islandId++;
    }
    for(let i = 0; i < row; i++){
        for(let j = 0; j < col; j++){
            if(grid[i][j] == 1){
                countIsland(i,j);
            };
        };
    };
    return islandId - 2;
};
