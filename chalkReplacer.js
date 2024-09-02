/**
 * @param {number[]} chalk
 * @param {number} k
 * @return {number}
 */
var chalkReplacer = function(chalk, k) {
    let count = 0;
    for(let num of chalk){
        count += num;
    }
    let i = 0;
    if(k < count){
        while(k - chalk[i] >= 0){
            k -= chalk[i];
            i++;
        }
    }else{
        let rem = k % count;
        while(rem - chalk[i] >= 0){
            rem -= chalk[i];
            i++;
        }
    }
    return i;
};
