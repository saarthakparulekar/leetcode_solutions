/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    let l = 0;
    let r = matrix.length - 1;
    let mid = 0;
    while(l <= r){
        mid = l + Math.floor((r-l)/2);
        if(matrix[mid][0] > target){
            r = mid - 1;
        }else if(matrix[mid][matrix[mid].length-1] < target){
            l = mid + 1;
        }else{
            break;
        }
    }
    let a = 0;
    let b = matrix[mid].length - 1;
    while(a <= b){
        let num = a + Math.floor((b-a)/2);
        if(matrix[mid][num] > target){
            b = num - 1;
        }else if(matrix[mid][num] < target){
            a = num + 1;
        }else{
            return true;
        }
    }
    return false;
};
