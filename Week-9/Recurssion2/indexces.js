function findAllIndices(arr, target, currentIndex = 0, indices = []) {
    if (currentIndex >= arr.length) {
      return indices;
    }
  
    if (arr[currentIndex] === target) {
      indices.push(currentIndex);
    }
  
    return findAllIndices(arr, target, currentIndex + 1, indices);
  }
  
  const array = [1, 2, 3, 2, 4, 2, 5];
  const target = 2;
  
  const indices = findAllIndices(array, target);
  console.log("Indices of target:", indices);