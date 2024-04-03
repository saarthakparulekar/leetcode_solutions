/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let product = [];
    let prefix = 1;
    let postfix = 1;
    for(let i = 0; i<nums.length; i++){
        product[i] = prefix;
        prefix *= nums[i];
    }
    for(let j = nums.length-2; j >= 0; j--){
        postfix *= nums[j+1];
        product[j] *= postfix;
    }
    return product;
};

//This code exceeded time limit
// /**
//  * @param {number[]} nums
//  * @return {number[]}
//  */
// var productExceptSelf = function(nums) {
//     let product = Array(nums.length).fill(1);
    
//     for(let i = 0; i < nums.length; i++){
//         for(let j = 0; j < nums.length; j++){
//             if(j != i){
//                 product[i] *= nums[j];
//             }
//         }
//     }
//     return product;
// };
