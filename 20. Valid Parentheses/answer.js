/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let ary = s.split('');
    let match = {
        '}': '{',
        ')': '(',
        ']': '['
    };
    let stack = [];
    ary.forEach((item, index) => {
        if (index > 0) {
            if (stack.length > 0 && stack[stack.length - 1] === match[item]) {
                stack.pop();
                return;
            }
        }
        stack.push(item);
    });
    return stack.length === 0;
};