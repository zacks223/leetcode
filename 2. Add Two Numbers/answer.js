/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

var addTwoNumbers = function(l1, l2) {
    let root = new ListNode(0);
    let tail = root;
    let carry = 0;
    while (l1 || l2 || carry) {
        let v1 = l1 ? l1.val : 0;
        let v2 = l2 ? l2.val : 0;
        let result = v1 + v2 + carry;
        carry = result >= 10 ? 1 : 0;
        root.val = result % 10;
        l1 = l1&&l1.next;
        l2 = l2&&l2.next;
        if (l1 || l2 || carry) {
            root.next = new ListNode(result % 10);
        }
        
        root = root.next;
    }
    return tail;
};