/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
const mergeKLists = (lists) => {
    const arr = [];
    const head = new ListNode();
    let point = head;
    for(let i = 0; i < lists.length; ++i) {
        let l = lists[i];
        while(l !== null) {
            arr.push(l.val);
            l = l.next;
        }
    }
    arr.sort((a, b) => a-b);
    arr.map(v => {
        point.next = new ListNode(v);
        point = point.next;
    });
    return head.next;
};