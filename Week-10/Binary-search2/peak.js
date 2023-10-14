function findPeakElement(nums) {
    let left = 0;
    let right = nums.length - 1;
  
    while (left < right) {
      const mid = Math.floor((left + right) / 2);
  
      if (nums[mid] > nums[mid + 1]) {
        right = mid;
      } else {
        left = mid + 1;
      }
    }
  
    return left;
  }
  
  const inputArray = [1, 2, 3, 1];
  const peakIndex = findPeakElement(inputArray);
  console.log(peakIndex);