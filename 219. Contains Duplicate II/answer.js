/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    let rec = {};
    return nums.some((n, index) => {
        let duplicate = rec[n] !== undefined;
        if (duplicate) {
            let distance = index - rec[n];
            if (distance <= k) return true;
        }
        rec[n] = index;
        return false;
    });
};