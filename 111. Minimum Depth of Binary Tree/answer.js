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
var minDepth = function(root) {
    let q = root ? [root] : [];
    let min;
    while (q.length > 0) {
        let node = q.splice(0, 1)[0];
        min = node.depth = (node.parent ? node.parent.depth : 0) + 1;
        if (!node.left && !node.right) {
            break;
        } else {
            if (node.left) {
                node.left.parent = node;
                q.push(node.left);
            }
            if (node.right) {
                node.right.parent = node;
                q.push(node.right);
            }
        }
    }
    return min || 0;
};