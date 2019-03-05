/**
 * @param {number} n
 * @return {string}
 */
var convertToTitle = function(n) {
    function getChar(count) {
        if (count <= 26 && count > 0) {
            return String.fromCharCode(64 + count);
        } else if (count === 0) {
            return '';
        } else {
            let remain = count % 26;
            return `${getChar(parseInt(count / 26))}${String.fromCharCode(64 + remain)}`;
        }
    }
    if (n % 26 === 0) {
        if (n >= 26) {
            return `${getChar((n / 26) - 1)}Z`;
        } else {
            return ''
        }
    } else {
        return getChar(n);
    }
};