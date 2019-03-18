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
var isPalindrome = function(head) {
    let cur = head;
    if (!head) return true;
    while (cur.next) {
        cur.next.prev = cur;
        cur = cur.next;
    }
    while (head && cur) {
        if (head.val !== cur.val) {
            return false;
        }
        head = head.next;
        cur = cur.prev;
    }
    return true;
};