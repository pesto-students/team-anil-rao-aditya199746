function mergeSortDates(arr) {
    if (arr.length <= 1) {
      return arr;
    }
  
    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle);
    const right = arr.slice(middle);
  
    return merge(mergeSortDates(left), mergeSortDates(right));
  }
  
  function merge(left, right) {
    const result = [];
    let leftIndex = 0;
    let rightIndex = 0;
  
    while (leftIndex < left.length && rightIndex < right.length) {
      if (new Date(left[leftIndex]) < new Date(right[rightIndex])) {
        result.push(left[leftIndex]);
        leftIndex++;
      } else {
        result.push(right[rightIndex]);
        rightIndex++;
      }
    }
  
    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
  }
  
  const dates = [
    "2023-07-03 12:30:15",
    "2023-08-18 09:45:30",
    "2023-06-20 15:10:00",
    "2023-07-03 10:20:45"
  ];
  
  const sortedDates = mergeSortDates(dates);
  console.log(sortedDates);