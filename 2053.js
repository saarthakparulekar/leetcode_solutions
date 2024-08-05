/**
 * @param {string[]} arr
 * @param {number} k
 * @return {string}
 */
var kthDistinct = function(arr, k) {
    let hash = {};
    for(let s of arr){
        if(hash[s] != undefined){
            hash[s]++
        }else{
            hash[s] = 1;
        }
    }
    let keys = Object.keys(hash);
    let val = [];
    for(let i = 0; i < keys.length; i++){
        if(hash[keys[i]] < 2){
            val.push(keys[i]);
        }
    }
    if(val.length < k){
        return '';
    }else return val[k-1];
};
