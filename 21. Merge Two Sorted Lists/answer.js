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
var mergeTwoLists = function(l1, l2) {
    let list, root;
    while (l1 || l2) {
        let next = l1 || l2;
        if (l1 && l2) {
            next = l1.val < l2.val ? l1 : l2;
        }
        let nextNode = new ListNode(next.val)
        if (!list) {
            root = list = nextNode;
        } else {
            list.next = nextNode;
            list = list.next;
        }
        switch (next) {
            case l1:
                l1 = l1.next;
                break;
            case l2:
                l2 = l2.next;
                break;
            default:
                return;
        }
    }
    return root || new ListNode().next;
};