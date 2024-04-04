/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function(s) {
    let stack = [];
    let count = 0;
    for(let i of s){
        if(i === '('){
            stack.push(i);
            if(stack.length > count){
                count = stack.length;
            }
        } else if (i === ")"){
            stack.pop();
        }
    }
    return count;
};
