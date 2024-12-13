//2593. Find Score of an Array After Marking All Elements
//Took help, but solved something new
//Solved within 10 mins, learned new methods

/**
 * @param {number[]} nums
 * @return {number}
 */
var findScore = function(nums) {
    let n = nums.length;
    let used = new Array(n).fill(false);
    let indices = Array.from({length : n},(_,i) => i).sort((a,b)=>nums[a]-nums[b]);
    let score = 0;
    for(let i of indices){
        if(!used[i]){
            score += nums[i];
            used[i] = true;
            if(i > 0) used[i-1] = true;
            if(i < nums.length - 1) used[i+1] = true;
        }
    }
    return score;
};
