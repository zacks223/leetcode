/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    if (nums.length < 3) {
        return Math.max(...nums);
    } else {
        let map = {};
        let first, second, third;
        nums.forEach((n) => {
            if (map[n]) return;
            map[n] = 1;
            if (n > first || first === undefined) {
                third = second;
                second = first;
                first = n;
            } else if (n > second || second === undefined) {
                third = second;
                second = n;
            } else if (n > third || third === undefined) {
                third = n;
            }
        });
        return third === undefined ? (first || second) : third;
    }
};