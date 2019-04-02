/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
    let l = 0, r = Math.ceil(num / 2);
    let ret = false;
    if (l * l === num || r * r === num) {
        ret = true;
    } else {
        while(r - l > 1) {
            let mid = Math.ceil((r - l) / 2 + l);
            let mids = mid * mid;
            if (mids === num) {
                ret = true;
                break;
            } else if (mids > num) {
                r = mid;
            } else if (mids < num) {
                l = mid;
            }
        }
    }
    return ret;
};