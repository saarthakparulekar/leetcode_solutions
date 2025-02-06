//1726. Tuple with Same Product
//took help, Math, Revise
/**
 * @param {number[]} nums
 * @return {number}
 */
var tupleSameProduct = function(nums) {
    let hash = {};
    for(let i = 0; i < nums.length; i++){
        for(let j = i + 1; j < nums.length; j++){
            let product = nums[i] * nums[j];
            if(hash[product] == undefined){
                hash[product] = 1;
            }else hash[product]++;
        };
    };
    let res = 0;
    for(let key in hash){
        if(hash[key] > 1){
            let count = hash[key];
            res += 8 * (count * ((count - 1) / 2));
        }
    }
    return res;
};
