/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    s = s.toLowerCase();
    let ret = true;
    let start = 0, end = s.length - 1;
    while (start <= end) {
        let sChar = s[start];
        let eChar = s[end];
        if (!isValid(sChar)) {
            start++;
            continue;
        }
        if (!isValid(eChar)) {
            end--;
            continue;
        }
        if (sChar !== eChar) {
            ret = false;
            break;
        }
        start++;
        end--;
    }
    return ret;
};
    
function isValid(c) {
    return (c >= 'a' && c <= 'z') || (c >= '0' && c <= '9');
}