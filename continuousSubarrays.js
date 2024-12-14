//Took more than 30 mins
//Took help
//slidiwng window, deque
/**
 * @param {number[]} nums
 * @return {number}
 */
var continuousSubarrays = function(nums) {
    let maxDeque = [];
    let minDeque = [];
    let result = 0;
    let i = 0;
    for(let j = 0; j < nums.length; j++){
        while(maxDeque.length > 0 && nums[maxDeque[maxDeque.length-1]] <= nums[j]){
            maxDeque.pop();
        }
        maxDeque.push(j);
        while(minDeque.length > 0 && nums[minDeque[minDeque.length-1]] >= nums[j]){
            minDeque.pop();
        }
        minDeque.push(j);

        while(nums[maxDeque[0]] - nums[minDeque[0]] > 2){
            if(maxDeque[0] === i)maxDeque.shift();
            if(minDeque[0] === i)minDeque.shift();
            i++;
        }

        result += j - i + 1
    };
    return result;
};
