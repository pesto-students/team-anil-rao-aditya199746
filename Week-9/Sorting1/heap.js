function heapify(arr, n, i) {
    let largest = i;
    const left = 2 * i + 1;
    const right = 2 * i + 2;
  
    if (left < n && arr[left].length > arr[largest].length) {
      largest = left;
    }
  
    if (right < n && arr[right].length > arr[largest].length) {
      largest = right;
    }
  
    if (largest !== i) {
      const temp = arr[i];
      arr[i] = arr[largest];
      arr[largest] = temp;
  
      heapify(arr, n, largest);
    }
  }
  
  function heapSort(arr) {
    const n = arr.length;
  
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
      heapify(arr, n, i);
    }
  
    for (let i = n - 1; i >= 0; i--) {
      const temp = arr[0];
      arr[0] = arr[i];
      arr[i] = temp;
  
      heapify(arr, i, 0);
    }
  
    return arr;
  }
  
  const strings = ["apple", "banana", "orange", "grape", "pear"];
  const sortedStrings = heapSort(strings);
  console.log(sortedStrings);