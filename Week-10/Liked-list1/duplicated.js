class ListNode {
    constructor(val, next = null) {
      this.val = val;
      this.next = next;
    }
  }
  
  function removeDuplicates(head) {
    if (!head) {
      return null;
    }
  
    const seen = new Set();
    let current = head;
    seen.add(current.val);
  
    while (current.next) {
      if (seen.has(current.next.val)) {
        current.next = current.next.next;
      } else {
        seen.add(current.next.val);
        current = current.next;
      }
    }
  
    return head;
  }
  
  // Example usage
  const list = new ListNode(1);
  list.next = new ListNode(2);
  list.next.next = new ListNode(2);
  list.next.next.next = new ListNode(3);
  list.next.next.next.next = new ListNode(4);
  
  const deduplicatedList = removeDuplicates(list);
  
  // Print the deduplicated linked list
  let currentNode = deduplicatedList;
  while (currentNode) {
    console.log(currentNode.val);
    currentNode = currentNode.next;
  }