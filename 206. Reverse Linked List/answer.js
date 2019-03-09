/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    let tail = null;
    while (head) {
        let next = head.next;
        head.next = tail;
        tail = head;
        head = next;
    }
    return tail;
};