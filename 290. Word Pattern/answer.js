/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
var wordPattern = function(pattern, str) {
    let words = str.split(' ');
    let pMap = {};
    let sMap = {};
    if (pattern.length !== words.length) return false;
    return words.every((w, index) => {
        if (!pMap[pattern[index]] && !sMap[w]) {
            pMap[pattern[index]] = w;
            sMap[w] = pattern[index];
            return true;
        } else {
            return pMap[pattern[index]] === w && sMap[w] === pattern[index];
        }
    })
};