/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let root = x;
    let ret = 0;
    let negativeBoundary = -Math.pow(2, 31)
    let positiveBoundary = Math.pow(2, 31) - 1;
    if (x >= 0) {
        root = `${root}`.split('');
        ret = +root.reverse().join('');
    } else {
        root = `${Math.abs(root)}`.split('');
        ret = -(+root.reverse().join(''));
    }
    return ret >= negativeBoundary && ret <= positiveBoundary ? ret : 0;
};