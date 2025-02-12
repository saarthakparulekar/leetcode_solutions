//2342. Max Sum of a Pair With Equal Sum of Digits
//Solved on own, in 8 mins
/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumSum = function(nums) {
   let res = -1;
   let hash = {};
   for(let num of nums){
    let toString = String(num);
    let sum = 0;
    for(let digit of toString){
        sum += Number(digit);
    };
    if(hash[sum] == undefined){
        hash[sum] = num;
    }else{
        res = Math.max(res, num + hash[sum]);
        if(num > hash[sum]){
            hash[sum] = num;
        }
    };
   } ;
   return res;
};
