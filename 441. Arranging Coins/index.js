/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function(n) {
    let sum = 0;
    let index = 0;
    while (sum < n) {
        index++;
        sum+= index;
    }
    return sum === n ? index : index - 1;
};