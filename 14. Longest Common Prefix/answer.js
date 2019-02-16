/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let subString = strs[0] || '';
    let index = 0;
    let mix = `#${strs.join('#')}`;
    let matchPart = ''
    while (index < subString.length) {
        let next = matchPart + subString[index];
        let reg = new RegExp(`#${next}`, 'g');
        let matches = mix.match(reg);
        if (matches && matches.length === strs.length) {
            matchPart = next;
            index++;
        } else {
            break;
        }
    }
    return matchPart;
};