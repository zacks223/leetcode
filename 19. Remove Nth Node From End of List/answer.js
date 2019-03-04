/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let map = {};
    let cur = head;
    let count = 0;
    while (cur) {
        count++;
        map[count] = cur;
        cur = cur.next;
    }
    let index = count - n;
    if (index === 0) {
        head = head.next;
    } else {
        map[index].next = map[index].next.next;
    }
    return head;
};