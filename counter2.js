/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
    let currcount = init;
    return{
    increment : () => {
        return ++currcount;
    },
    decrement : () => {
       return --currcount;
    },
    reset : () =>{
        return currcount = init;
    }  
    }
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */
