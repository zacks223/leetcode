/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
    let ret = [];
    let upper = 0;
    num1 = num1.split('');
    num2 = num2.split('');
    while (num1.length > 0 || num2.length > 0) {
        let sum = (+num1.pop() || 0) + (+num2.pop() || 0) + upper;
        ret.push(sum % 10);
        upper = sum >= 10 ? 1 : 0;
    }
    if (upper) ret.push(upper);
    return ret.reverse().join('');
};