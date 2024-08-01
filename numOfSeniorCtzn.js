/**
 * @param {string[]} details
 * @return {number}
 */
var countSeniors = function(details) {
    let count = 0;
    for(let str of details){
        if(Number(str.slice(11,13)) > 60){
            count++;
        }
    }
    return count;
};
