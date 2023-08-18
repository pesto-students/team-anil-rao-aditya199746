function findMin(nums) {
    let left = 0;
    let right = nums.length - 1;
  
    while (left < right) {
      const mid = Math.floor((left + right) / 2);
  
      if (nums[mid] > nums[right]) {
        left = mid + 1;
      } else if (nums[mid] < nums[right]) {
        right = mid;
      } else {
        // Handle the case where nums[mid] and nums[right] are equal
        right--;
      }
    }
  
    return nums[left];
  }
  
  const rotatedArray = [4, 5, 6, 7, 0, 1, 2];
  const minElement = findMin(rotatedArray);
  console.log(minElement);