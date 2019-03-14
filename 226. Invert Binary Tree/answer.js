/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {
    let head = root; 
    cur = head;
    while (head) {
        let rec = head.left;
        head.left = head.right;
        head.right = rec;
        if (head.left) {
            cur.next = head.left;
            cur = cur.next;
        }
        if (head.right) {
            cur.next = head.right;
            cur = cur.next;
        }
        head = head.next;
    }
    return root;
};