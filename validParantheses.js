//Solved on own, better runtime
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let par = {
        '(' : ')',
        '[' : ']',
        '{' : '}',
    }
    
    let stack = [];
    for(let x of s){
        let open = '({[';
        if(open.includes(x)){
            stack.push(x);
        }else{
            let temp = stack.pop();
            if(par[temp] != x){
                return false;
            } 
        }
    }
    return (stack.length == 0);

};

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
