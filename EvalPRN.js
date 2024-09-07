//Solved on own and beats 97%, was not timed but roughly around 25 mins
/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    let stack = [];
    let res = Number(tokens[0]);
    
    for(let token of tokens){
        if(token == '+'){
            let a = stack.pop();
            let b = stack.pop();
            res = b + a;
            stack.push(res);
        }else if(token == '-'){
            let a = stack.pop();
            let b = stack.pop();
            res = b - a;
            stack.push(res);
        }else if(token == "*"){
            let a = stack.pop();
            let b = stack.pop();
            res = b * a;
            stack.push(res);
        }else if(token == "/"){
            let a = stack.pop();
            let b = stack.pop();
            res = Math.trunc(b / a);
            stack.push(res);
        }else{
            stack.push(Number(token));
        }
    }
    return res;
};
