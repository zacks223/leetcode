/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    let map = {};
    let ret;
    s.split('').forEach(c => {
        map[c] = (map[c] || 0) + 1;
    });
    t.split('').every(c => {
        let exist = !!map[c];
        if (!map[c]) {
            ret = c;
        } else {
            map[c] -= 1;
        }
        return exist;
    });
    return ret;
};