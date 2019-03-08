/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    let sMap = {};
    let tMap = {};
    let sAry = s.split('');
    let tAry = t.split('');
    return sAry.every((char, index) => {
        if (!sMap[char] && !tMap[tAry[index]]) {
            sMap[char] = tAry[index];
            tMap[tAry[index]] = char;
        }
        return sMap[char] === tAry[index] && tMap[tAry[index]] === char;
    });
};