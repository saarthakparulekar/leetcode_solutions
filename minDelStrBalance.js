//Solved wihtout DP, with help of solution, can do better 
/**
 * @param {string} s
 * @return {number}
 */
var minimumDeletions = function(s) {
    let result = 0;
    let bCount = 0;
    for(let char of s){
        if(char == 'b'){
            bCount++;
        }else if(bCount > 0){
            result++;
            bCount--;
        }
    }
    return result;
};
