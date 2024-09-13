//XOR Queries of Subarray

/**
 * @param {number[]} arr
 * @param {number[][]} queries
 * @return {number[]}
 */
var xorQueries = function(arr, queries) {
    let res = [];
    for(let query of queries){
        let [i,j] = query;
        let val = 0;
        while(i <= j){
            val ^= arr[i];
            i++;
        }
        res.push(val);
    }
    return res;
};
