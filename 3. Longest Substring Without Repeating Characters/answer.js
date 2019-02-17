/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let maxLength = 0
    if (s && s !== '') {
        let stringInArray = s.split('');
        let starterIndex = 0;
        while (stringInArray[starterIndex] !== undefined) {
            let substring = [stringInArray[starterIndex]];
            let nextIndex = starterIndex + 1;
            while (stringInArray[nextIndex]) {
                if (substring.indexOf(stringInArray[nextIndex]) === -1) {
                    substring.push(stringInArray[nextIndex]);
                } else {
                    break;
                }
                nextIndex++;
            }
            if (substring.length > maxLength) {
                maxLength = substring.length;
            }
            starterIndex++;
        }
    } else {
        ret = 0;
    }
    return maxLength;
};