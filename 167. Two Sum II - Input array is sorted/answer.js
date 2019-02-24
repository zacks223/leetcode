/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let start = 0;
    let end = numbers.length - 1;
    let ret;
    while (start < end) {
        let adder = numbers[start] + numbers[end];
        if (adder === target) {
            ret = [++start, ++end];
            break;
        } else {
            if (adder < target) {
                start++;
            } else {
                end--;
            }
        }
    }
    return ret;
};