//Solved with help
/**
 * @param {number[]} values
 * @return {number}
 */
var maxScoreSightseeingPair = function(values) {
    let res = 0;
    let max = values[0] - 1;
    for(let j = 1; j < values.length; j++){
        res = Math.max(max + values[j], res);
        max = Math.max(max - 1, values[j] - 1);
    }
    return res;
};
