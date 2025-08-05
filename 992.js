//992. Subarrays with K Different Integers (HARD)
//Sliding Window with (n - n-1) approach 
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraysWithKDistinct = function(nums, k) {
    function helper(arr, n){
        let hash = {};
        let hashSize = 0;
        let res = 0;
        let l = 0;
        for(let r = 0; r < arr.length; r++){
            if(hash[arr[r]] == undefined){
                hash[arr[r]] = 1;
                hashSize++;
            }else hash[arr[r]]++;

            while(hashSize > n){
                hash[nums[l]]--;
                if(hash[nums[l]] == 0){
                    delete hash[nums[l]];
                    hashSize--;
                };
                l++;
            };

            res += (r - l) + 1;
        };
        return res;
    };

    return Math.abs( helper(nums, k-1) - helper(nums, k));
};
