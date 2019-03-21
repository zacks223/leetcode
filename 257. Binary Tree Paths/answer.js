/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
    let stack = root ? [root] : [];
    let ret = [];
    while (stack.length > 0) {
        const head = stack.pop();
        const { road, left, right, val } = head;
        if (!left && !right) {
            ret.push(road ? `${road}->${val}` : `${val}`);
        }
        if (right) {
            right.road = road ? `${road}->${val}` : `${val}`;
            stack.push(right);
        }
        if (left) {
            left.road = road ? `${road}->${val}` : `${val}`;
            stack.push(left);
        }
    }
    return ret;
};