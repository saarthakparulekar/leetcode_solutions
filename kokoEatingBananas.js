//Took a hint, had some help from gpt for errors, good but need to look over it again
/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function(piles, h) {
    let l = 1;
    let r = Math.max(...piles);
    let res = r;
    while(l <= r){
        let mid = l + Math.floor((r-l)/2);
        let count = 0;
        for(let b of piles){
            count += Math.ceil(b/mid);
        }
        if(count > h){
            l = mid + 1;
        }else if(count <= h){
            res = Math.min(res,mid);
            r = mid - 1;
        }
    }
    return res;
};
