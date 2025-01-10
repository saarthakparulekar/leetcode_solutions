//84. Largest Rectangle in Histogram
//Took help but understood the concept
//Stack
/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
    let max = 0;
    let stack = [];
    for(let i = 0; i < heights.length; i++){
        let ind = i;
        while(stack.length > 0 && stack[stack.length-1][1] > heights[i]){
            let temp = stack.pop();
            ind = temp[0];
            max = Math.max(max, temp[1] * (i - temp[0]));
        }
        stack.push([ind,heights[i]]);
    };
    for(let [i,h] of stack){
        max = Math.max(max, h * (heights.length - i));
    }
    return max;
};
