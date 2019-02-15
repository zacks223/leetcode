/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let ret = false;
    let start = 0;
    x = x.toString().split('');
    let end = x.length - 1;
    while (start < end) {
        if (x[start] !== x[end]) {
            break;
        }
        start++;
        end--;
    }
    ret = start >=end ? true : false;
    return ret;
};