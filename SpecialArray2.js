//Solved with help, optimal 
//Solved in 6 mins 
//Solution uses prefix sum 
/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {boolean[]}
 */
var isArraySpecial = function(nums, queries) {
    let prefix = [0];
    let res = [];
    let sum = 0;
    for(let i = 1; i < nums.length; i++){
        if(nums[i-1] % 2 == nums[i] % 2){
            sum++;
        }
        prefix.push(sum);
    }
    for(let query of queries){
        let l = query[0];
        let r = query[1];
        if(prefix[l] == prefix[r]){
            res.push(true);
        }else res.push(false);
    }
    return res;
};

//----------------------------------------------------------

//Solved on own, but brute force, leads to TLE
//IF-ELSE JUNGLE XD
/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {boolean[]}
 */
var isArraySpecial = function(nums, queries) {
    let res = [];
    for(let i = 0; i < queries.length; i++){
        let query = queries[i];
        if(query[0] == query[1]){
            res.push(true);
            continue;
        }
        let flag = true
        for(let j = query[0]; j <= query[1]; j++){
            if(j == query[0]){
                if(nums[j] % 2 == 0){
                    if(nums[j+1] % 2 == 0){
                        flag = false;
                        break;
                    }
                }else if(nums[j] % 2 !== 0){
                    if(nums[j+1] % 2 !== 0){
                        flag = false;
                        break;
                    }
                }
            }else if(j == query[1]){
                if(nums[j] % 2 == 0){
                    if(nums[j-1] % 2 == 0){
                        flag = false;
                        break;
                    }
                }else if(nums[j] % 2 !== 0){
                    if(nums[j-1] % 2 !== 0){
                        flag = false;
                        break;
                    }
                }
            }else{
                if(nums[j] % 2 == 0){
                    if(!(nums[j-1] % 2 !== 0 && nums[j+1] % 2 !== 0)){
                        flag = false;
                        break;
                    }
                }else if(nums[j] % 2 !== 0){
                    if(!(nums[j-1] % 2 == 0 && nums[j+1] % 2 == 0)){
                        flag = false;
                        break;
                    }
                }
            }
        }
        res.push(flag)
    }
    return res;
};
