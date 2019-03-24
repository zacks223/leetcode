/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let indexSum = 0;
    let numSum = 0;
    nums.forEach((n, index) => {
        indexSum += index;
        numSum += n;
    });
    return indexSum + nums.length - numSum;
};