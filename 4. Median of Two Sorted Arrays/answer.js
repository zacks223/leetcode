/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let combineArray = [...(nums1 || []), ...(nums2 || [])];
    combineArray.sort(function(a, b) {
        return a - b;
    });
    let l = combineArray.length;
    if (l % 2 ===0) {
        return (combineArray[parseInt(l / 2) - 1] + combineArray[parseInt(l / 2)]) / 2;
    } else {
        return combineArray[parseInt(l / 2)];
    }
};