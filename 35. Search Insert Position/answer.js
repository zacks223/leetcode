/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let ret;
    nums.some((n, index) => {
        if(n >= target) {
            ret = index;
            return true;
        }
    });
    return ret !== undefined ? ret : nums.length === 0 ? 0 : nums.length;
};