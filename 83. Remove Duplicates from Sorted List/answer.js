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
var deleteDuplicates = function(head) {
    let root = list = new ListNode();
    while (head) {
        if (head.val !== list.val) {
            list.next = new ListNode(head.val);
            list = list.next;
        }
        head = head.next;
    }
    return root.next;
};