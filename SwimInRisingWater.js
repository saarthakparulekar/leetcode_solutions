//500 problems
//Swim in rising water - Hard

/**
 * @param {number[][]} grid
 * @return {number}
 */
var swimInWater = function(grid) {
    let n = grid.length;
    let heap = new PriorityQueue((a,b) => a[0] - b[0]);
    heap.enqueue([grid[0][0],0,0]);
    let d = [[0,1],[1,0],[0,-1],[-1,0]];
    let visit = new Set();
    while(!heap.isEmpty()){
        let [val, r, c] = heap.dequeue();
        if(r == n-1 && c == n-1){
            return val;
        }
        for(let [dr,dc] of d){
            let nr = r + dr;
            let nc = c + dc;
            let key = '' + nr + nc;
            if(nr >= 0 && nc >= 0 && nr < n && nc < n && !visit.has(key)){
                let newVal = Math.max(val, grid[nr][nc]);
                heap.enqueue([newVal, nr, nc]);
                visit.add(key);
            };
        };
    };

};
