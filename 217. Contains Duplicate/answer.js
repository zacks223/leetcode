/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let rec = {};
    return !nums.every(n => {
        let unexist = rec[n] === undefined;
        if (unexist) {
            rec[n] = 1;
        }
        return unexist;
    })
};