/**
 * @param {number[]} nums
 * @param {number} n
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var rangeSum = function(nums, n, left, right) {
    let sumArr = [];
    for(let i = 0; i < nums.length; i++){
        let j = i + 1;
        sumArr.push(nums[i]);
        let sum = nums[i];
        while(j < nums.length){
            sum += nums[j];
            sumArr.push(sum);
            j++;
        }
    }
    sumArr.sort((a,b)=> a-b);
    let total = 0;
    for(let a = left-1; a < right; a++){
        total += sumArr[a];
    }
    return total % 1000000007;
};
