//With slow and fast pointer
/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    let slow = nums[0];
    let fast = nums[nums[0]];
    while(slow != fast){
        slow = nums[slow];
        fast = nums[nums[fast]];
    }
    fast = 0;
    while(slow != fast){
        slow = nums[slow];
        fast = nums[fast];
    };
    return slow;
};

//the solution below is stupid

var findDuplicate = function(nums) {
 let duplicate = new Set()
    for(let num  of nums){
        if(!duplicate.has(num)){
            duplicate.add(num)
        }else{
            return num
        }
    }
};

//Could be better
