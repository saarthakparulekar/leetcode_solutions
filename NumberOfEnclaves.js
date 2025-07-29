//1020. Number of Enclaves (medium) 
//Easy but fumbled due to silly mistake while naming
/**
 * @param {number[][]} grid
 * @return {number}
 */
var numEnclaves = function(grid) {
    let m = grid.length;
    let n = grid[0].length;
    // Find the border cells
    let q = [];
    for(let i = 1; i < m - 1; i++){
        if(grid[i][0] == 1){
            q.push([i,0]);
            grid[i][0] = 2;
        }
        if(grid[i][n - 1] == 1){
            q.push([i,n-1]);
            grid[i][n-1] = 2;
        }
    };
    for(let i = 0; i < n; i++){
        if(grid[0][i] == 1){
            q.push([0,i]);
            grid[0][i] = 2;
        }
        if(grid[m-1][i] == 1){
            q.push([m-1,i]);
            grid[m-1][i] = 2;
        }
    };
    let d = [[0,1],[1,0],[0,-1],[-1,0]];
    
    while(q.length > 0){
        let [r,c] = q.shift();
        for(let [dr,dc] of d){
            let nr = r + dr;
            let nc = c + dc;
            if(nr < m && nc < n && nr >= 0 && nc >= 0 && grid[nr][nc] == 1){
                grid[nr][nc] = 2;
                q.push([nr,nc]);
            };
        };
    };

    let res = 0;
    for(let r = 0; r < m; r++){
        for(let c = 0; c < n; c++){
            if(grid[r][c] == 1)res++;
        };
    };
    return res;
};
