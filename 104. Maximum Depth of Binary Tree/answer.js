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
var maxDepth = function(root) {
    let head = {};
    let cur = head;
    cur.next = root || null;
    cur = cur.next;
    let d = 0;
    
    while (head.next) {
        let node = head.next;
        head = head.next;
        d = node.depth = (node.parent ? node.parent.depth : 0) + 1;
        if (node.left) {
            node.left.parent = node;
            cur.next = node.left;
            cur = cur.next;
        }
        if (node.right) {
            node.right.parent = node;
            cur.next = node.right;
            cur = cur.next;
        }
    }
    return d;
};