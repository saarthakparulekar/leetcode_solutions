/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    let res = [];
    intervals.sort((a,b) => a[0] - b[0]);
    for(let [l,r] of intervals){
        if(res.length == 0 || l > res[res.length-1][1]){
            res.push([l,r]);
        }else if(r > res[res.length - 1][1]){
            res[res.length - 1][1] = r;
        };
    };
    return res;
};
