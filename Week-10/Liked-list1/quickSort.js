class ListNode {
    constructor(val, next = null) {
      this.val = val;
      this.next = next;
    }
  }
  
  function partition(head, end) {
    const pivot = end.val;
    let prev = null;
    let curr = head;
  
    while (curr !== end) {
      if (curr.val < pivot) {
        if (prev) {
          prev.next = curr.next;
        } else {
          head = curr.next;
        }
  
        const temp = curr.next;
        curr.next = end.next;
        end.next = curr;
        curr = temp;
      } else {
        prev = curr;
        curr = curr.next;
      }
    }
  
    return prev ? prev.next : head;
  }
  
  function quicksortLinkedList(head, end) {
    if (!head || head === end) {
      return head;
    }
  
    const partitioned = partition(head, end);
  
    if (partitioned !== head) {
      let prev = head;
      while (prev.next !== partitioned) {
        prev = prev.next;
      }
      prev.next = null;
  
      head = quicksortLinkedList(head, prev);
      const newEnd = getEnd(head);
      newEnd.next = partitioned;
    }
  
    partitioned.next = quicksortLinkedList(partitioned.next, end);
  
    return head;
  }
  
  function getEnd(head) {
    while (head && head.next) {
      head = head.next;
    }
    return head;
  }
  
  function quicksortList(head) {
    const end = getEnd(head);
    return quicksortLinkedList(head, end);
  }
  
  // Example usage
  const list = new ListNode(3);
  list.next = new ListNode(1);
  list.next.next = new ListNode(4);
  list.next.next.next = new ListNode(2);
  
  const sortedList = quicksortList(list);
  let currentNode = sortedList;
  while (currentNode) {
    console.log(currentNode.val);
    currentNode = currentNode.next;
  }