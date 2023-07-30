function generateSubsets(nums) {
    const subsets = [];
  
    function backtrack(start, currentSubset) {
      subsets.push([...currentSubset]);
  
      for (let i = start; i < nums.length; i++) {
        currentSubset.push(nums[i]);
        backtrack(i + 1, currentSubset);
        currentSubset.pop();
      }
    }
  
    backtrack(0, []);
  
    return subsets;
  }
  
  // Example usage:
  const nums = [1, 2, 3];
  console.log(generateSubsets(nums));