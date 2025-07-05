//1394. Find Lucky Integer in an Array
/**
 * @param {number[]} arr
 * @return {number}
 */
var findLucky = function(arr) {
    let hash = {};
    for(let num of arr){
        hash[num] = (hash[num] || 0) + 1;
    }
    let res = -1;
    for(let num in hash){
        if(num == hash[num]){
            res = Math.max(num, res); 
        }
    }
    return res;
};
