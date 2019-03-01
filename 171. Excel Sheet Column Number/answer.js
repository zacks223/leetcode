/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function(s) {
    let ret = 0;
    let index = 0;
    while (index < s.length) {
        ret += Math.pow(26, s.length - index -1) * (s.charCodeAt(index) - 64);
        index++;
    }
    return ret;
};