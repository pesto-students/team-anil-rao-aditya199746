function findMaxLength(nums) {
    const countMap = new Map();
    countMap.set(0, -1); // Initialize the map with count difference 0 at index -1 (before the array starts).
    
    let maxLength = 0;
    let count = 0;
    
    for (let i = 0; i < nums.length; i++) {
      // Increment the count for 1s and decrement for 0s
      count += nums[i] === 1 ? 1 : -1;
      console.log(count,"///")
      if (countMap.has(count)) {
        // If the current count difference exists in the map, update the max length
        maxLength = Math.max(maxLength, i - countMap.get(count));
      } else {
        // If the current count difference is not in the map, add it with the current index
        countMap.set(count, i);
      }
    }
    console.log(countMap,"...")
    return maxLength;
  }
  
  console.log(findMaxLength([0,1,0,1,0,1]))