/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const mergeTwoLists = (l1, l2) => {
    const merged = new ListNode();
    recursion(merged, l1, l2);
    return merged.next;
};

const recursion = (merged, l1, l2) => {
    if(l1 === null && l2 === null) return ;
    if(l1 === null) {
        merged.next = new ListNode(l2.val);
        recursion(merged.next, l1, l2.next);
    } else if(l2 === null) {
        merged.next = new ListNode(l1.val);
        recursion(merged.next, l1.next, l2);
    } else if(l1.val >= l2.val) {
        merged.next = new ListNode(l2.val);
        recursion(merged.next, l1, l2.next);
    } else {
        merged.next = new ListNode(l1.val);
        recursion(merged.next, l1.next, l2);
    }
}