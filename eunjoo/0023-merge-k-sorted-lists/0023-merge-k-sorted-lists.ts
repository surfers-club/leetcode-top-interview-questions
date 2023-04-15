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

function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
    const ansValues = [];
    
    for(let i = 0; i < lists.length; i++) {
        let node = lists[i];
        while(node) {
            ansValues.push(node.val);
            node = node.next;
        }
    }
    ansValues.sort((a,b) => a-b);

    const ansNodes = new ListNode(0);
    let tail = ansNodes;
    
    for(let j = 0; j < ansValues.length; j++) {
        tail.next = new ListNode(ansValues[j]);
        tail = tail.next;
    }
    
    return ansNodes.next;
};