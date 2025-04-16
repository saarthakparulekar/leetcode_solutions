//2537. Count the Number of Good Subarrays
//Important problem
//Took help but once you understand it its quite easy

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countGood = function(nums, k) {
    let hash = {};
    let i = 0;
    let pairs = 0;
    let res = 0;
    for(let j = 0; j < nums.length; j++){
        if(hash[nums[j]] == undefined){
            hash[nums[j]] = [1, 0];
        }else hash[nums[j]][0]++;

        if(hash[nums[j]][0] >= 2){
            let newCount = (hash[nums[j]][0] - 1) + hash[nums[j]][1];
            pairs -= hash[nums[j]][1];
            hash[nums[j]][1] = newCount;
            pairs += newCount;
        }

        while(pairs >= k){
            res += nums.length - j;
            let temp = hash[nums[i]][0] - 1;
            hash[nums[i]][1] -= temp;
            hash[nums[i]][0]--;
            pairs -= temp;
            i++;
        }
    }
    return res;
};
