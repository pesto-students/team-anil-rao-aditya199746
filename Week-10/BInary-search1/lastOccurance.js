function lastOccurrence(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    let lastIndex = -1;
  
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
  
      if (arr[mid] === target) {
        lastIndex = mid;
        left = mid + 1; // Move to the right half to search for the last occurrence
      } else if (arr[mid] < target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  
    return lastIndex;
  }
  
  const sortedArray = [2, 4, 6, 6, 6, 8, 10, 12];
  const targetValue = 6;
  
  const lastIndex = lastOccurrence(sortedArray, targetValue);
  console.log(lastIndex);