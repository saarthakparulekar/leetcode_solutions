//This solution passed;
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numSubarrayProductLessThanK = function(nums, k) {
let count = 0;
for( let l = 0; l<nums.length; l++){
    let product = 1;
    for(let r = l; r<nums.length; r++){
        product = nums[r]*product;
        if(product < k){
            count++;
        }else{
            break;
        }
    }
}
return count;
};

//This was correct but it took too long 
let l = 0;
let count = 0;

while(l < nums.length){
    let product = 1;
    let r = l;
    while(r < nums.length){
        product = product * nums[r];
        if(product < k)count++;
        r++;
    }
    l++;
}
console.log(count);
