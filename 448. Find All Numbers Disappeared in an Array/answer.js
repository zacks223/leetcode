/**
 * 时间复杂度O(n)
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

/**
 * 时间复杂度O(2n)
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    let ret = new Array(nums.length);
    let counter = 0;
    nums.forEach(n => {
        ret[n - 1] = n;
    });
    
    for (let i = 0; i < ret.length; i++) {
        if (ret[i] !== i + 1) {
            counter++;
            nums.push(i + 1);
        }
    };
    return nums.splice(nums.length - counter, counter);
};