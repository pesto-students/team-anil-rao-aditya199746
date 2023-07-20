function findIntersection(arr1, arr2) {
    const set = new Set(arr1); 
    const intersection = []; 
    
    for (const num of arr2) { 
      if (set.has(num)) { 
        intersection.push(num); 
        set.delete(num);
      }
    }
    
    return intersection; 
  }