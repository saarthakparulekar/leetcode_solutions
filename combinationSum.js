//Solved on own
//Backtracking
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    let result = [];
    function backtrack(i, sum, subset){
        if(i >= candidates.length || sum >= target){
            if(sum == target){
                result.push([...subset]);
            };
            return;
        };
        //Decision to take the same element
        subset.push(candidates[i]);
        sum += candidates[i];
        backtrack(i, sum, subset);
        //Decision to not take the same element
        subset.pop();
        sum -= candidates[i];
        backtrack(i + 1, sum, subset)
    }

    backtrack(0, 0, []);
    return result;
};
