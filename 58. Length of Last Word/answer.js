/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    s = s.split('');
    let length = 0;
    let word = [];
    s.forEach((character, index) => {
        let isSpace = character === ' ';
        !isSpace && word.push(character);
        if (index === s.length - 1 || isSpace) {
            length = word.length || length;
            word = [];
        }
    })
    return length;
};