/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/**
 * @param {Node} root
 * @return {number}
 */
var maxDepth = function(root) {
    let head = {};
    let cur = head;
    cur.next = root || null;
    cur = cur.next;
    let max = 0;
    while (head.next) {
        head = head.next;
        head.depth = (head.parent ? head.parent.depth : 0) + 1;
        max = head.depth > max ? head.depth : max;
        if (head.children && head.children.length > 0) {
            head.children.forEach(n => {
                n.parent = head;
                cur.next = n;
                cur = cur.next;
            });
        }
    }
    return max;
};