/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
    let reverse = n.toString(2).split('').reverse();
    let remain = 32 - reverse.length;
    return parseInt(reverse.concat(new Array(remain).fill('0')).join(''), 2);
};