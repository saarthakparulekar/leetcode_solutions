//2352. Equal Row and Column Pairs
//Took help A G A I N !!!!!!!!!!!
/**
 * @param {number[][]} grid
 * @return {number}
 */
var equalPairs = function(grid) {
    let hash = {};
    let n = grid.length;
    let res = 0;
    for(let i = 0; i < n; i++){
        let r = grid[i].join(',');
        if(hash[r] == undefined){
            hash[r] = 1;
        }else hash[r]++;
    };
    for(let i = 0; i < n; i++){
        let c = [];
        for(let j = 0; j < n; j++){
            c.push(grid[j][i]);
        };
        let col = c.join(',');
        if(hash[col] !== undefined){
            res += hash[col];
        }
    }
    return res;
};
