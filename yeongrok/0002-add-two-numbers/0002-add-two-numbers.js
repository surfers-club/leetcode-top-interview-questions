/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    const sum = l1.val + l2.val + (this.leftOver || 0);
    let [unitDigit, tensDigit = '0'] = sum.toString().split("").reverse();
    unitDigit *= 1;
    tensDigit *= 1;
    this.leftOver = tensDigit;
    
    if (this.head) {
        let current = this.head;
        while (current.next) {
            current = current.next;
        }
        current.next = new ListNode(unitDigit, null);
        this.tail = current.next;
    } else {
        this.head = new ListNode(unitDigit, null);
        this.tail = head;
    }

    if (l1.next && l2.next) {
        addTwoNumbers(l1.next, l2.next);
    } else if (l1.next?.val || l2.next?.val) {
        addTwoNumbers(l1.next || l2.next, new ListNode(0, null));
    } else if (this.leftOver) {
        this.tail.next = new ListNode(this.leftOver, null);
        this.tail = this.tail.next;
    }

    return head;
};
