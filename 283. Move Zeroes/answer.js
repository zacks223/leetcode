/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let index = 0;
    let movecount = 0;
    while (index < nums.length) {
        if (nums[index] === 0) {
            if (index < nums.length - movecount) {
                nums.push(nums.splice(index, 1)[0]);
                movecount++;
                continue;
            }
        }
        index++;
    }
};