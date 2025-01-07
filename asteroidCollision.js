//Solved on own, improved code through help
//Beats 98% , Stack

var asteroidCollision = function(asteroids) {
    let stack = [];
    let i = 0;
    while(i < asteroids.length){
        if(stack.length == 0 || asteroids[i] > 0 || stack[stack.length - 1] < 0){
            stack.push(asteroids[i]);
        }else if(stack[stack.length-1] == -asteroids[i]){
            stack.pop();
        }else if(stack[stack.length-1] < -asteroids[i]){
            stack.pop();
            i--;
        };
        i++;
    }
    return stack;
};
