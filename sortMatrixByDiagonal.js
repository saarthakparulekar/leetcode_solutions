//3446. Sort Matrix by Diagonals (Medium)
//Simple matrix problem
/**
 * @param {number[][]} grid
 * @return {number[][]}
 */
var sortMatrix = function(grid) {
    let n = grid.length;
    function sortGrid(r, c, sortBy){
        let elmts = [];
        let nr = r;
        let nc = c;
        while(nr >= 0 && nc >= 0 && nr < n && nc < n){
            elmts.push(grid[nr][nc]);
            nr += 1;
            nc += 1;
        };
        if(sortBy == 1){
            elmts.sort((a,b) => a - b);
        }else{
            elmts.sort((a,b) => b - a);
        }
        let ind = 0;
        while(r >= 0 && c >= 0 && r < n && c < n){
            grid[r][c] = elmts[ind];
            ind++;
            r += 1;
            c += 1;
        };
        return;
    }
    for(let i = 0; i < n; i++){
        sortGrid(i, 0, 0);
        if(i > 0)sortGrid(0, i, 1);
    };
    return grid;
};
