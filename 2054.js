//2054. Two Best Non-Overlapping Events
//Solved to learn, Time taken : 30 mins
//Topics : Binary Search, Suffix Array 

/**
 * @param {number[][]} events
 * @return {number}
 */
var maxTwoEvents = function(events) {
    let n = events.length;

    events.sort((a,b) => a[0] - b[0]);

    let suff = new Array(n);
    suff[n-1] = events[n-1][2];

    for(let i = n-2; i >= 0; i--){
        suff[i] = Math.max(suff[i+1],events[i][2]);
    }
    
    let max = 0;

    for(let i = 0; i < events.length; i++){
        let l = i + 1;
        let r = n - 1;
        let index = -1;
        while(l <= r){
            let mid = l + Math.floor((r-l)/2);
            if(events[mid][0] > events[i][1]){
                index = mid;
                r = mid - 1
            }else {
                l = mid + 1;
            }
        }
        if(index !== -1){
            max = Math.max(max, events[i][2] + suff[index]);
        }
        max = Math.max(max,events[i][2]);
    }
    return max;
};
