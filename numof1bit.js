/**
 * @param {number} n
 * @return {number}
 */
var hammingWeight = function(n) {
    let binary = n.toString(2);
    let hamming = binary.replace(/[0]/gi, "");
    return hamming.length;
};
