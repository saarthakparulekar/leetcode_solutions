//Solved on own 
/**
 * @param {number[]} arr
 * @return {boolean}
 */
var checkIfExist = function(arr) {
    let hash = {};
    for(let num of arr){
        let temp1 = num * 2;
        let temp2 = num / 2;
        if(hash[temp1] !== undefined){
            return true;
        }else if(hash[temp2] !== undefined){
            return true;
        }else hash[num] = 1;
    }
    return false;
};
