//Solved on own 
/**
 * @param {number[]} nums
 * @param {number} maximumBit
 * @return {number[]}
 */
var getMaximumXor = function(nums, maximumBit) {
    let res = [];
    let prefix = 0;
    for(let bit of nums){
        prefix ^= bit;
        let temp = prefix ^ ((2 ** maximumBit)-1);
        res.push(temp);
    }
    return res.reverse();
};
