//1751. Maximum Number of Events That Can Be Attended II
//Holy shit this was tough, took 50 mins to solve and some chatGPT to fix the binary search
//top-down dp + binary search
/**
 * @param {number[][]} events
 * @param {number} k
 * @return {number}
 */
var maxValue = function(events, k) {
    let n = events.length;
    events.sort((a,b) => a[0] - b[0]);

    //binary search
    function nextIndex(index){
        let lastDate = events[index][1];
        let l = index;
        let r = n - 1;
        while(l <= r){
            let mid = l + Math.floor((r-l)/2);
            if(events[mid][0] <= lastDate){
                l = mid + 1;
            }else{
                r = mid - 1;
            }
        }
        return l;
    }

    let cache = Array.from({ length: n }, () => Array(k + 1).fill(-1));
    //a -> attended, v-> value, i -> index
    function dp(a, i){
        if(a == k || i == n){
            return 0;
        };
        if(cache[i][a] != -1){
            return cache[i][a];
        };
        let skip = dp(a,i+1);
        let take = events[i][2] + dp(a+1, nextIndex(i))
        cache[i][a] = Math.max(skip,take);
        return cache[i][a];
    }

    return dp(0,0);
};
