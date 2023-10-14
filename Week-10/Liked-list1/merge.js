class ListNode {
    constructor(val, next = null) {
      this.val = val;
      this.next = next;
    }
  }
  
  function mergeSortedLists(list1, list2) {
    const dummy = new ListNode(-1);
    let current = dummy;
  
    while (list1 !== null && list2 !== null) {
      if (list1.val < list2.val) {
        current.next = list1;
        list1 = list1.next;
      } else {
        current.next = list2;
        list2 = list2.next;
      }
      current = current.next;
    }
  
    if (list1 !== null) {
      current.next = list1;
    }
  
    if (list2 !== null) {
      current.next = list2;
    }
  
    return dummy.next;
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
  const list1 = createLinkedList([1, 3, 5]);
  const list2 = createLinkedList([2, 4, 6]);
  
  const mergedList = mergeSortedLists(list1, list2);
  printLinkedList(mergedList);