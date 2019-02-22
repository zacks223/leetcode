/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let maxProfit = 0;
    if (prices.length > 0) {
        let min = prices.splice(0, 1)[0];
        prices.forEach(out => {
            let profit = out - min;
            if (out - min > maxProfit) {
                maxProfit = profit > maxProfit ? profit : maxProfit;
            }
            min = out < min ? out : min;
        })
    }
    return maxProfit;
};