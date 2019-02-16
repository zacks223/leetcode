/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let start = 0, end = height.length - 1, mx = 0, toLeft = true;
    while (start < end) {
        let mw = getMw(height, start, end);
        mx = mw > mx ? mw : mx;
        if (toLeft) {
            let nextEnd = end;
            while (start < nextEnd) {
                nextEnd = findHigherIndex(height, start, nextEnd, toLeft);
                if (nextEnd) {
                    mw = getMw(height, start, nextEnd);
                    mx = mw > mx ? mw : mx;
                } else {
                    break;
                }
            }
            start++;
        } else {
            let nextStart = start;
            while (nextStart < end) {
                nextStart = findHigherIndex(height, nextStart, end, toLeft);
                if (nextStart) {
                    mw = getMw(height, nextStart, end);
                    mx = mw > mx ? mw : mx;
                } else {
                    break;
                }
            }
            end--;
        }
        toLeft = !toLeft;
    }
    return mx;
};

function getMw(items, start, end) {
    return Math.abs(end - start) * Math.min(items[end], items[start]);
}

function findHigherIndex(items, start, end, toLeft) {
    let ret, startValue = items[start], endValue = items[end];
    while (start < end) {
        if (toLeft) {
            end--;
            if (items[end] > endValue) {
                ret = end;
                break;
            }
        } else {
            start++;
            if (items[start] > startValue) {
                ret = start;
                break;
            }
        }
    }
    return ret;
}