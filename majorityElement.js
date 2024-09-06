// SOLVED WITH THE HELP OF BOYER-MOORE MAJORITY VOTING ALGORITHM
// SOLVED ON OWN, TIME TAKEN = 3 MINUTES AND 45 SECONDS

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let element = 0;
    let votes = 0;
    for(let num of nums){
        if(votes == 0){
            element = num;
            votes = 1;
        }else if(votes > 0 && element == num){
            votes++;
        }else{
            votes--;
        }
    }
    return element;
};
