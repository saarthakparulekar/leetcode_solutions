//Took help, butgreat problem, should revise in a while
/**
 * @param {number} target
 * @param {number[]} position
 * @param {number[]} speed
 * @return {number}
 */
var carFleet = function(target, position, speed) {
    let hash = {};
    for(let i = 0; i < position.length; i++){
        hash[position[i]] = speed[i];
    }
    let sort = position.toSorted((a,b) => b-a);
    let stack = [];
    for(let pos of sort){
        stack.push((target - pos) / hash[pos]);
        if(stack.length > 1 && stack[stack.length - 1] <= stack[stack.length - 2]){
            stack.pop();
        };
    };
    return stack.length;
};
