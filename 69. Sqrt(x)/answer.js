/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    if (Math.pow(x, 2) === x) {
        // 0, 1
        return x;
    } else {
        let right = x;
        let left = 0;
        let next = Math.floor(x / 2);
        while (true) {
            let s = Math.pow(next, 2);
            let over = s > x;
            if (!over && Math.pow(next + 1, 2) > x) {
                break;
            }
            if (over) {
                right = next;
                next = Math.floor((next - left) / 2)
            } else {
                left = next;
                next = Math.floor((right - next) / 2) + left;
            }
        }
        return next;
    }
};