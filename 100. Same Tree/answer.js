/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    let pQueue = [p || {}];
    let qQueue = [q || {}];
    let ret = true;
    while (pQueue.length !== 0 || qQueue.length !== 0) {
        let pNode = pQueue.splice(0, 1)[0];
        let qNode = qQueue.splice(0, 1)[0];
        if (!(pNode && qNode && pNode.val === qNode.val)) {
            ret = false;
            break;
        }
        if (pNode.left || pNode.right) {
            pQueue.push(pNode.left || {});
            pQueue.push(pNode.right || {});
        }
        if (qNode.left || qNode.right) {
            qQueue.push(qNode.left || {});
            qQueue.push(qNode.right || {}); 
        }
    }
    return ret;
};