/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    let map1 = {};
    let ret = [];
    nums1.forEach(n => {
        map1[n] = (map1[n] || 0) + 1;
    });
    nums2.forEach(n => {
        if (map1[n]) {
            ret.push(n);
            map1[n]-=1;
        }
    });
    return ret;
};