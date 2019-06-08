/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {
    let index = 0;
    let lastInput = null;
    let crash = false;
    if (chars.length > 0) {
        let counter = 0;
        while (index <= chars.length) {
            const curr = chars[index];
            const prev = chars[index - 1];
            if (curr === lastInput) {
                crash = true;
                lastInput = null;
            }
            if (prev && curr === prev && !crash) {
                counter++;
                chars.splice(index, 1);
            } else {
                crash = false;
                if (counter >= 1) {
                    if (counter > 1) {
                        const charsToInsert = (counter + '').split('');
                        charsToInsert.forEach((char, indentIndex) => {
                             chars.splice(index + indentIndex, 0, char);
                            lastInput = char;
                        });
                        index += charsToInsert.length;
                    }
                    counter = 0;
                } else {
                    counter++;
                    index++;
                }
            }
        }
    }
    return chars.length;
};
