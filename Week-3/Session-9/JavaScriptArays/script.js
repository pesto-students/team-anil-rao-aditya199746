function divideArray(numbers)
{
    let evenNums=[]
    let oddNums=[]
    numbers.forEach(ele => {
        ele%2===0 ? evenNums.push(ele):oddNums.push(ele)
    });

    evenNums.sort((a, b) => a - b);
    oddNums.sort((a, b) => a - b);

  // Output the even numbers
  console.log("Even numbers:");
  if (evenNums.length === 0) {
    console.log("None");
  } else {
    for (let i = 0; i < evenNums.length; i++) {
      console.log(evenNums[i]);
    }
  }

  // Output the odd numbers
  console.log("Odd numbers:");
  if (oddNums.length === 0) {
    console.log("None");
  } else {
    for (let i = 0; i < oddNums.length; i++) {
      console.log(oddNums[i]);
    }
  }
}