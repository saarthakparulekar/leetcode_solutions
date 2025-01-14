//Solved on own
//2657. Find the Prefix Common Array of Two Arrays
/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
var findThePrefixCommonArray = function(A, B) {
    let count = 0;
    let res = [];
    let hash = {};
    for(let i = 0; i < A.length; i++){
        if(hash[A[i]] == undefined){
            hash[A[i]] = 1;
        }else{
            count++;
        }
        if(hash[B[i]] == undefined){
            hash[B[i]] = 1;
        }else{
            count++;
        }
        res.push(count);
    };
    return res;
};
