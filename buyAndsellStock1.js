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
