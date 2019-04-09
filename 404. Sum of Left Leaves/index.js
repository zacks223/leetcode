/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumOfLeftLeaves = function(root) {
    let sum = 0;
    let s = root ? [root] : [];
    while (s.length > 0) {
        let node = s.pop();
        if (node.left) {
            s.push(node.left);
            if (!node.left.left && !node.left.right) {
                sum += (node.left || {}).val || 0;
            }
        }
        if (node.right) {
            s.push(node.right);
        }
    }
    return sum;
};