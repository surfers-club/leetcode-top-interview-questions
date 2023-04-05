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

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    let curr1 = list1;
    let curr2 = list2;
    let mergedListHead = null;
    let mergedListTail = null;

    const linkedToMergedList = node => {
        if (mergedListTail) {
            mergedListTail.next = node;
            mergedListTail = mergedListTail.next;
        } else {
            mergedListHead = node;
            mergedListTail = mergedListHead;
        }
    }

    while (curr1 || curr2) {
        if (curr1 && curr1.val <= (curr2?.val ?? Infinity)) {
            linkedToMergedList(curr1);
            curr1 = curr1.next;
        }
        else if (curr2 && curr2.val <= (curr1?.val ?? Infinity)) {
            linkedToMergedList(curr2);
            curr2 = curr2.next;
        }
        else break;
    }

    return mergedListHead;
};
