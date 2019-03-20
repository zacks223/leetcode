/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length) return false;
    let sMap = {};
    let tMap = {};
    function rec(string, map) {
        let index = 0;
        while (index < string.length) {
            let char = string[index];
            map[char] = map[char] ? map[char] + 1 : 1;
            index++;
        }
    }
    rec(s, sMap);
    rec(t, tMap);
    return Object.keys(sMap).every(key => {
        let s = sMap[key];
        let t = tMap[key];
        return s && t && s === t;
    });
};