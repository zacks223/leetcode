/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    s = s.split('');
    if (s.length === 0) return '';
    let vowelMap = {
        a: ' ',
        e: ' ',
        i: ' ',
        o: ' ',
        u: ' ',
        A: ' ',
        E: ' ',
        I: ' ',
        O: ' ',
        U: ' '
    };
    let start = 0, end = s.length - 1;
    while (start < end) {
        if (!vowelMap[s[start]]) {
            start++;
            continue;
        }
        if (!vowelMap[s[end]]) {
            end--;
            continue;
        }
        let m = s[end];
        s[end] = s[start];
        s[start] = m;
        start++;
        end--;
    }
    return s.join('');
};