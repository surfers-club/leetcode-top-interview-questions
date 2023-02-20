/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    var makeList = (l1, l2) => {
        const curr = new ListNode((l1.val + l2.val), null);
        if (l1.next && l2.next) {
            curr.next = makeList(l1.next, l2.next);
        } else if (l1.next || l2.next) {
            curr.next = l1.next || l2.next;
        }
        return curr;
    }
    
    let head = makeList(l1, l2);
    let tail = head;
    while (tail.next || tail.val >= 10) {
        let [unitDigit, tensDigit] = tail.val.toString().split("").reverse().map(Number);
        tail.val = unitDigit
        if (tensDigit) {
            if (!tail.next) tail.next = new ListNode();
            tail.next.val += tensDigit;
        }
        tail = tail.next;
    }
    return head;
};
