/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let index = 0;
    while (index <= nums.length - 1) {
        let prevIndex = index - 1;
        if (prevIndex >= 0 && nums[index] === nums[prevIndex]) {
            nums.splice(index, 1);
        } else {
            index++;
        }
    }
    return nums.length;
};