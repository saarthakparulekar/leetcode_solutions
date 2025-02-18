//Solved on own
//Graph
/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
    let queue = [];
    let freshCount = 0;
    let row = grid.length;
    let col = grid[0].length;
    for(let i = 0; i < row; i ++){
        for(let j = 0; j < col; j++){
            if(grid[i][j] == 1){
                freshCount++;
            }else if(grid[i][j] == 2){
                queue.push([i,j]);
            }
        }
    }
    let res = 0;
    let directions = [[0,1],[1,0],[0,-1],[-1,0]]
    if(freshCount == 0){
        return res;
    }
    while(queue.length > 0){
        res++;
        let n = queue.length;
        let temp = [];
        for(let i = 0; i < n; i++){
            let [r,c] = queue.pop();
            for(let [dr,dc] of directions){
                let cr = r + dr;
                let cc = c + dc;
                if(cr < row && cc < col && cr >= 0 && cc >= 0 && grid[cr][cc] == 1){
                    temp.push([cr,cc]);
                    grid[cr][cc] = 2;
                    freshCount--;
                }
            }
        }
        queue.push(...temp)
        if(freshCount == 0){
            return res;
        }
    }
    return -1;
};
