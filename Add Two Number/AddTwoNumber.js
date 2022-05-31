var addTwoNumbers = function (l1, l2) {
  let current = new ListNode(0);
  let result = current;
  let carry = 0;
  while (l1 != null || l2 != null) {
    let x = l1 != null ? l1.val : 0;
    let y = l1 != null ? l1.val : 0;
    let sum = x + y + carry;
    carry = sum > 9 ? 1 : 0;
    current.next = new ListNode(sum % 10);
    current = current.next;
    if (l1 != null) l1 = l1.next;
    if (l2 != null) l2 = l2.next;
  }
  if (carry > 0) {
    current.next = new ListNode(carry);
  }
  return result.next;
};
