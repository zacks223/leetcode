/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    let keyStore = {};
    let exist = {};
    nums.forEach((n, index) => {
        const v = index + 1;
        exist[n] = 1;
        keyStore[v] = '';
        if (exist[v]) {
            delete keyStore[v];
        }
        delete keyStore[n];
    });
    return Object.keys(keyStore);
};