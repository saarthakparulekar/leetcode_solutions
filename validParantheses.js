/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
let stack = [];
let idea = {
    ")":"(",
    "}":"{",
    "]":"[",
}

for(i of s){
    if(i in idea){
        if(stack.length && stack[stack.length-1] == idea[i]){
            stack.pop();
        } else {
            return false;
        }
    } else {
        stack.push(i);
    }
}
return !stack.length;
};
