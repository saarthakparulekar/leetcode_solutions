//827. Making A Large Island
// LC HARD - GRAPH
//Brute force solved on own
//Took help for optimal approach
//Works well need to revise again sometime

/**
 * @param {number[][]} grid
 * @return {number}
 */
var largestIsland = function(grid) {
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

    for(let i =0; i < row; i++){
        for(let j = 0; j < col; j++){
            if(grid[i][j] == 0){
                let visit = new Set();
                let len = 1;
                for(let [dr,dc] of directions){
                    let curR = i + dr;
                    let curC = j + dc;
                    if(curR >= 0 && curC >= 0 && curR < row && curC < col && grid[curR][curC] > 1){
                        let id = grid[curR][curC]
                        if(!visit.has(id)){
                            visit.add(id);
                            len += islandCount[id];
                        };
                    };
                };
                res = Math.max(res,len)
            }
        };
    };
    return res;
    
};
