/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const swapPairs = (head) => {
    let p = head;
    const arr = [];
    while(p !== null) {
        arr.push(p.val);
        p = p.next;
    }
    for(let i = 0 ; i < arr.length; i += 2) {
        const a = arr[i];
        const b = arr[i+1];
        if(a !== undefined && b !== undefined) {
            arr[i] = b;
            arr[i+1] = a;
        }
    }
    const answer = new ListNode(0);
    let temp = answer;
    while(arr.length !== 0) {
        temp.next = new ListNode(arr.shift());
        temp = temp.next;
    }
    return answer.next;
};