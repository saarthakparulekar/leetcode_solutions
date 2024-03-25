/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
    let duplicate = new Set();
    let arr = [];
    for(let num of nums){
        if(!duplicate.has(num)){
            duplicate.add(num);
        } else {
            arr.push(num);
        }
    }
    return arr;
};

//Space Complexity exceeds a bit
