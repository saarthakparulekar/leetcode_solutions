//Solved by video, can solve again to practice

/**
 * @param {number} start
 * @param {number} goal
 * @return {number}
 */
var minBitFlips = function(start, goal) {
    let xor = start ^ goal;
    let flip = 0;
    while(xor){
        flip += xor & 1;
        xor = xor >> 1;
    }
    return flip;
};
