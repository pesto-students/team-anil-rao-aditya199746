function squareRootBinarySearch(n, precision = 0.0001) {
    let left = 0;
    let right = n;
    let mid = (left + right) / 2;
  
    while (Math.abs(mid * mid - n) > precision) {
      if (mid * mid < n) {
        left = mid;
      } else {
        right = mid;
      }
      mid = (left + right) / 2;
    }
  
    return mid;
  }
  
  const number = 25;
  const sqrt = squareRootBinarySearch(number);
  console.log(sqrt);