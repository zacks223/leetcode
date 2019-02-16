/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
    str = str.trim();
    let matchPart = str.match(/[-+]?\d+/);
    let ret = 0;
    if (matchPart && matchPart.length > 0) {
        let match = matchPart[0]
        ret = str.indexOf(match) === 0 ? +match : 0;
    }
    if (ret >= 0) {
        ret = Math.min(ret, Math.pow(2, 31) - 1);
    } else {
        ret = Math.max(ret, -Math.pow(2, 31));
    }
    return ret;
};