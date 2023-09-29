function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;
  
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
  
      if (arr[mid] === target) {
        return true;
      } else if (arr[mid] < target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  
    return false;
  }
  
  const sortedArray = [2, 4, 6, 8, 10, 12, 14];
  const targetValue = 8;
  
  const isPresent = binarySearch(sortedArray, targetValue);
  console.log(isPresent);