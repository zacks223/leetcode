/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let index1 = 0;
    let index2 = 0;
    while (index2 < nums2.length || index1 < nums1.length) {
        let next = nums2[index2];
        if (nums1[index1] >= next) {
            nums1.pop();
            nums1.splice(index1, 0, next);
            index2++;
            m++;
        } else if (index1 >= m) {
            nums1.pop();
            nums1.splice(index1, 0, next);
            index1++;
            index2++;
        } else {
            index1++;
        }
    }
};