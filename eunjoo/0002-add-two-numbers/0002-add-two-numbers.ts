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

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    const answer = new ListNode();
    let tail = answer;
    let quotient = 0;
    
    while(l1 || l2 || quotient) {
        const sum = (l1?.val || 0) + (l2?.val || 0) + quotient;
        
        quotient = sum >= 10 ? 1 : 0;
        const remainder = sum % 10;

        tail.next = new ListNode(remainder);
        tail = tail.next;

        l1 = l1?.next;
        l2 = l2?.next;
    }

    return answer.next;
};