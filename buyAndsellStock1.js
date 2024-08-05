//Solved on own
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let max = 0;
    let low = prices[0];
    let j = 1;
    while(j < prices.length){
        if(prices[j] < low){
            low = prices[j];
        }else{
            let profit = prices[j] - low;
            max = Math.max(max,profit);
        }
        j++;
    }
    return max;
};
//solved with help
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let l = 0;
    let r = 1;
    let maxP = 0;

    while(r < prices.length){
       if(prices[r] <= prices[l])l = r;
       let profit = prices[r] - prices[l];
       maxP = Math.max(profit, maxP);
       r++;
    };
    return maxP;
};
