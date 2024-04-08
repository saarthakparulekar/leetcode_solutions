/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let left = 0;
    let right = numbers.length - 1;
    let ans;
    while(ans != target){
         ans = numbers[left] + numbers[right];
        if(ans == target){
            return[left+1,right+1];
        }else if(ans < target){
            left++;
        }else if(ans > target){
            right--
        }
    }
};

//this one beats 99.92% (optimized) while the above beats 75%
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let left = 0;
    let right = numbers.length - 1;
    while(numbers[left] + numbers[right] != target){
        if(numbers[left] + numbers[right] < target){
            left++;
        }else {
            right--;       
        }
    }
    return[left+1,right+1]
};
