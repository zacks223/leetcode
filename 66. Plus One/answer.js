/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let ret = [];
    let carry = 1;
    while (digits.length) {
        let next = digits.pop() + carry;
        carry = next > 9 ? 1 : 0;
        ret.push(next % 10);
    }
    carry && ret.push(1)
    return ret.reverse();
};