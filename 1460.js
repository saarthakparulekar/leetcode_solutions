/**
 * @param {number[]} target
 * @param {number[]} arr
 * @return {boolean}
 */
var canBeEqual = function(target, arr) {
    let hashA = {};
    let hashB = {};
    for(let i = 0; i < target.length; i++){
        if(hashA[target[i]] == undefined){
            hashA[target[i]] = 1;
        }else hashA[target[i]]++;

        if(hashB[arr[i]] == undefined){
            hashB[arr[i]] = 1;
        }else hashB[arr[i]]++;
    }
    if(Object.keys(hashA).join('') == Object.keys(hashB).join('') && Object.values(hashA).join('') == Object.values(hashB).join('')){
        return true
    }else return false;
};
