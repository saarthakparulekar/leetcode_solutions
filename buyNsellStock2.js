//Solved under 10 mins

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let buy = 0;
    let sell = 0;
    let profit = 0;
    for(let i = 1; i < prices.length; i++){
        if(prices[i] < prices[buy]){
            buy = i;
        }else if(prices[i] > prices[i+1] || i == prices.length-1){
            profit += prices[i] - prices[buy];
            buy = i;
        }
    }
    return profit;
};
