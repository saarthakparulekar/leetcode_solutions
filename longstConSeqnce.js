//With sorting
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    let seq = 1;
    highestSeq = 0;
    if(nums.length < 0){
        return 0;
    }
    let sorted = nums.toSorted((a,b)=>a-b);
    for(let i = 0; i < sorted.length; i++){
        if(sorted[i+1] - sorted[i] <= 1){
            if(sorted[i] != sorted[i+1]){
                seq++;
            }
        }else{
            highestSeq = Math.max(seq,highestSeq);
            seq = 1;
        }
    }
    return highestSeq;
};

//Without Sorting
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    let unq = new Set(nums);
    let longSeq = 0;
    for(let num of nums){
        if(!unq.has(num-1)){
            let seq = 1;
            while(unq.has(num+seq)){
                seq++;
            }
            longSeq = Math.max(longSeq,seq);
        }
    }
    return longSeq;
};
