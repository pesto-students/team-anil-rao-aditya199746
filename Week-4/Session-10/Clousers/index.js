function counter() {
    let count = 0; 
  
    return function() {
      count++;
      return count;
    };
  }
  
  const firstCounter = counter();
  const secondCounter = counter();
  
  const firstValues = [];
  for (let i = 0; i < 5; i++) {
    firstValues.push(firstCounter());
  }
  
  const secondValues = [];
  for (let i = 0; i < 3; i++) {
    secondValues.push(secondCounter());
  }
  
  // Print the arrays
  console.log("firstValues array:", firstValues);
  console.log("secondValues array:", secondValues);