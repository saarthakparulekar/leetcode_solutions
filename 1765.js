//1765. Map of Highest Peak
//Solved on own, took an hour, but solution works well 
// Multi source BFS
/**
 * @param {number[][]} isWater
 * @return {number[][]}
 */
var highestPeak = function(isWater) {
    let row = isWater.length;
    let col = isWater[0].length
    let res = Array.from({length : row}, () => Array(col).fill(-1));
    let queue = [];
    for(let i = 0; i < row; i++){
        for(let j = 0; j < col; j++){
            if(isWater[i][j] == 1){
                queue.push([i,j]);
                res[i][j] = 0;
            };
        };
    };
    let direction = [[0, 1],[1, 0],[0, -1],[-1, 0]]
    while(queue.length > 0){
        let n = queue.length
        let tempQ = []
        for(let i = 0; i < n; i++){
            let [r,c] = queue.pop();
            for(let [dr,dc] of direction){
                let curR = r + dr;
                let curC = c + dc;
                if(curR >= 0 && curC >= 0 && curR < row && curC < col && res[curR][curC] == -1){
                    res[curR][curC] = res[r][c] + 1;
                    tempQ.push([curR,curC]);
                };
            };
        };
        queue = tempQ;
    };
    return res;
    
};
