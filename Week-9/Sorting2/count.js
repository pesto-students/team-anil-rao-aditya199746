function countingSort(arr) {
    if (arr.length <= 1) {
      return arr;
    }
  
    const maxValue = Math.max(...arr);
    const countArray = new Array(maxValue + 1).fill(0);
  
    for (let num of arr) {
      countArray[num]++;
    }
  
    for (let i = 1; i < countArray.length; i++) {
      countArray[i] += countArray[i - 1];
    }
  
    const sortedArray = new Array(arr.length);
  
    for (let i = arr.length - 1; i >= 0; i--) {
      sortedArray[countArray[arr[i]] - 1] = arr[i];
      countArray[arr[i]]--;
    }
  
    return sortedArray;
  }
  
  const numbers = [64, 34, 25, 12, 22, 11, 90];
  const sortedNumbers = countingSort(numbers);
  console.log(sortedNumbers);