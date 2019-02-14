/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let ret;
    nums.forEach((add, index) => {
        nums.forEach((adder, erIndex) => {
            if (index !== erIndex) {
                if (add + adder === target) {
                    ret = [index, erIndex].sort()
                }
            }
        });
    });
    return ret;
};