/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let mx = 0;
    let charCount = {};
    let countChar = {};
    nums.forEach(n => {
        let c = (charCount[n] || 0) + 1;
        charCount[n] = c;
        countChar[c] = n;
        mx = c > mx ? c : mx;
    });
    return +countChar[mx];
};