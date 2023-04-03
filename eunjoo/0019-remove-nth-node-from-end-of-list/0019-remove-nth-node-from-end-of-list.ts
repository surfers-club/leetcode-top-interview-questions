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
    const nodeList = [];
    let currNode = head;

    while(currNode) {
       nodeList.push(currNode);
       currNode = currNode.next;
    }

    if(nodeList.length-n-1 < 0) {
        return head.next;
    } else {
        nodeList[nodeList.length-n-1].next = nodeList[nodeList.length-n-1].next?.next;
    }

    return head;
};
