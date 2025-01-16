//2425. Bitwise XOR of All Pairings
//Solved on own had worst TC and inefficient
//This one is Neetcode's approach
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var xorAllNums = function(nums1, nums2) {
    function xor(arr){
        let res = 0;
        for(let num of arr){
            res ^= num;
        };
        return res;
    };
    let n = nums1.length;
    let m = nums2.length;
    if(n % 2 == 0 && m % 2 == 0){
        return 0;
    }else if(n % 2 == 1 && m % 2 == 0){
        return xor(nums2);
    }else if(n % 2 == 0 && m % 2 == 1){
        return xor(nums1);
    }else{
        return(xor(nums1) ^ xor(nums2));
    };
};
