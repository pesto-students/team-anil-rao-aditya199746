function bucketSort(arr) {
    const evenBucket = [];
    const oddBucket = [];
  
    // Separate even and odd numbers into separate buckets
    for (let num of arr) {
      if (num % 2 === 0) {
        evenBucket.push(num);
      } else {
        oddBucket.push(num);
      }
    }
  
    // Sort the individual buckets
    evenBucket.sort((a, b) => a - b);
    oddBucket.sort((a, b) => a - b);
  
    // Combine the sorted buckets
    return evenBucket.concat(oddBucket);
  }
  
  const numbers = [4, 7, 2, 11, 8, 5, 10, 3];
  const sortedNumbers = bucketSort(numbers);
  console.log(sortedNumbers);