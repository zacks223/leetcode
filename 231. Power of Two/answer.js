/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    if (n === 1) return true;
    if (n % 2 === 0 && n) {
        let mix = 2;
        while (mix < n) {
            mix *= 2;
        }
        return mix === n;
    }
    return false;
};