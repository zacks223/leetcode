/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    let listhead = {
        next: head,
    };
    let cur = listhead;
    while (cur) {
        if (cur.next && cur.next.val === val) {
            cur.next = cur.next.next;
        } else {
            cur = cur.next;
        }
        
    }
    return listhead.next;
};