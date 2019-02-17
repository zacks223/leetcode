/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    let aIndex = a && a.length - 1 || 0;
    let bIndex = b && b.length - 1 || 0;
    let carry = 0;
    let ret = [];
    while (aIndex >= 0 || bIndex >=0 || carry) {
        let result = +(a[aIndex] || 0) + +(b[bIndex] || 0) + carry;
        carry = result > 1 ? 1 : 0;
        ret.splice(0, 0, result % 2);
        aIndex--;
        bIndex--;
    }
    return ret.join('');
};