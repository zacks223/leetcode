/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let nextIndex = nums.findIndex(i => i === val);
    while (nextIndex !== -1) {
        nums.splice(nextIndex, 1);
        nextIndex = nums.findIndex(i => i === val);
    }
    return nums.length;
};