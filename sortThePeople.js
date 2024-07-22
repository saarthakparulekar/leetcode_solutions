/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
var sortPeople = function(names, heights) {
    let sort = [];
    for( let num of heights.toSorted(function(a,b){return b-a})){
        sort.push(names[heights.indexOf(num)])
    }
    return sort;
};

//Could be optimized
