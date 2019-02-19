/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    let ret = false;
    while (head) {
        head.mem = 1;
        head = head.next;
        if (head && head.mem) {
            ret = true;
            break;
        }
    }
    return ret;
};