//Solved with help from Neetcode, need to revise
//Binary search range
/**
 * @param {number[]} nums
 * @param {number} maxOperations
 * @return {number}
 */
var minimumSize = function(nums, maxOperations) {
    let r = Math.max(...nums);
    let l = 1;
    let div = function(i){
        let ops = 0;
        for(let num of nums){
            ops += Math.ceil(num/i) - 1;
            if(ops > maxOperations){
                return false;
            }
        }
        return true;
    }
    while(l < r){
        let mid = l + Math.floor((r-l)/2);
        if(div(mid)){
            r = mid;
        }else{
            l = mid + 1;
        } 
    }
    return l;
};
