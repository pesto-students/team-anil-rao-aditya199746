function selectionSortStrings(arr) {
    const n = arr.length;
  
    for (let i = 0; i < n - 1; i++) {
      let minIndex = i;
  
      for (let j = i + 1; j < n; j++) {
        if (arr[j] < arr[minIndex]) {
          minIndex = j;
        }
      }
  
      if (minIndex !== i) {
        // Swap elements if necessary
        const temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
      }
    }
  
    return arr;
  }
  
  const strings = ["apple", "banana", "orange", "grape", "pear"];
  const sortedStrings = selectionSortStrings(strings);
  console.log(sortedStrings);