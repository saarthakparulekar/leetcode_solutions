//Took help of ChatGPT
//Need to solve again

/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    let arr = new Array(temperatures.length).fill(0);
    let stack = [];
    for(let i = 0; i < temperatures.length; i++){
        while(stack.length > 0 && temperatures[i] > temperatures[stack[stack.length-1]]){
            let top = stack.pop();
            arr[top] = i - top;
        }
        stack.push(i);
    }
    return arr;
};
