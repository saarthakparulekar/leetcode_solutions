//Solved on own, uses code of another same problem (LC HARD - 827)

/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
    let row = grid.length;
    let col = grid[0].length;
    let directions = [[0,1],[1,0],[0,-1],[-1,0]];
    let res = 0;

    let islandCount = {};
    let islandId = 2;
    function setIsland(i,j){
        let q = [[i,j]];
        islandCount[islandId] = 0;
        grid[i][j] = islandId;
        while(q.length > 0){
            let [r,c] = q.shift();
            islandCount[islandId]++;
            for(let [dr,dc] of directions){
                let curR = r + dr;
                let curC = c + dc;
                if(curR >= 0 && curC >= 0 && curR < row && curC < col && grid[curR][curC] == 1){
                    grid[curR][curC] = islandId;
                    q.push([curR,curC]);
                }
            }
        }
        res = Math.max(res,islandCount[islandId]);
        islandId++;
    };

    
    for(let i = 0; i < row; i++){
        for(let j = 0; j < col; j++){
            if(grid[i][j] == 1){
                setIsland(i,j);
            }
        }
    }
    return res;
};
