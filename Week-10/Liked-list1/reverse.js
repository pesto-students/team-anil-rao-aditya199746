class ListNode {
    constructor(val, next = null) {
      this.val = val;
      this.next = next;
    }
  }
  
  function reverseKNodes(head, k) {
    let current = head;
    let next = null;
    let prev = null;
    let count = 0;
  
    // Count the number of nodes in the current segment
    while (current !== null && count < k) {
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
      count++;
    }
  
    // Recursive call for the next segment
    if (next !== null) {
      head.next = reverseKNodes(next, k);
    }
  
    // 'prev' is the new head of the reversed segment
    return prev;
  }
  
  // Helper function to create a linked list
  function createLinkedList(arr) {
    let head = null;
    let current = null;
  
    for (const val of arr) {
      const newNode = new ListNode(val);
      if (!head) {
        head = newNode;
        current = head;
      } else {
        current.next = newNode;
        current = newNode;
      }
    }
  
    return head;
  }
  
  // Helper function to print linked list
  function printLinkedList(head) {
    let current = head;
    while (current !== null) {
      console.log(current.val);
      current = current.next;
    }
  }
  
  // Example usage
  const values = [1, 2, 3, 4, 5, 6, 7, 8];
  const k = 3;
  const linkedList = createLinkedList(values);
  
  const reversedLinkedList = reverseKNodes(linkedList, k);
  printLinkedList(reversedLinkedList);