/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let obj = {};
    nums.forEach(n => {
        if (!obj[n]) {
            obj[n] = 1;
        } else {
            delete obj[n];
        }
    });
    return +Object.keys(obj)[0];
};