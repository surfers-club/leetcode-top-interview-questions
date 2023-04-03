/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    if (!head.next) return null;

    let sz = 1;
    let curr = head;
    while (curr.next) {
        sz++;
        curr = curr.next;
    }

    if (sz === n) {
        return head.next;
    }

    curr = head;
    let index = 0;
    while (index !== sz - n - 1) {
        index++;
        curr = curr.next;
    }
    curr.next = curr.next?.next || null;

    return head;
}
