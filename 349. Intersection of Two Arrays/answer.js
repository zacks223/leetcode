/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    let map1 = {};
    let map2 = {};
    let ret = [];
    nums1.forEach(n => {
        map1[n] = 1;
    });
    nums2.forEach(n => {
        if (map1[n] && !map2[n]) {
            ret.push(n);
            map2[n] = 1;
        }
    });
    return ret;
};