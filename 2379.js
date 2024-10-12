//2379. Minimum Recolors to Get K Consecutive Black Blocks
//Sliding window, solved on own
/**
 * @param {string} blocks
 * @param {number} k
 * @return {number}
 */
var minimumRecolors = function(blocks, k) {
    let w = 0;
    let i = 0;
    let res = k;
    for(let j = 0; j < blocks.length; j++){
        if(blocks[j] == 'W'){
            w++;
        }
        if(j+1 > k){
            if(blocks[i] == 'W'){
                w--;
            }
            i++;
        }
        if(j+1 >= k){
            res = Math.min(res,w);
        }
    }
    return res;
};
