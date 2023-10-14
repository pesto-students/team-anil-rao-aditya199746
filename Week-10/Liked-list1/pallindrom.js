class ListNode {
    constructor(val, next = null) {
      this.val = val;
      this.next = next;
    }
  }
  
  function isPalindrome(head) {
    if (!head || !head.next) {
      return true; // Empty or single-node list is a palindrome
    }
  
    let slow = head;
    let fast = head;
    let prev = null;
  
    // Find the middle of the linked list
    while (fast && fast.next) {
      fast = fast.next.next;
      const next = slow.next;
      slow.next = prev;
      prev = slow;
      slow = next;
    }
  
    // Handle odd length
    if (fast) {
      slow = slow.next;
    }
  
    // Compare the first half with the reversed second half
    while (prev && slow) {
      if (prev.val !== slow.val) {
        return false;
      }
      prev = prev.next;
      slow = slow.next;
    }
  
    return true;
  }
  
  // Example usage
  const list = new ListNode(1);
  list.next = new ListNode(2);
  list.next.next = new ListNode(3);
  list.next.next.next = new ListNode(2);
  list.next.next.next.next = new ListNode(1);
  
  const result = isPalindrome(list);
  console.log(result); // Output: true