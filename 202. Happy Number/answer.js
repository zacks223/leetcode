/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    let rec = new Map();
    while (true) {
        let sum = 0;
        while (n > 0) {
            let next = n % 10;
            sum += next * next;
            n = parseInt(n / 10);
        }
        if (sum === 1) return true;
        if (rec.has(sum)) return false;
        rec.set(sum, 1);
        n = sum;
    }
};