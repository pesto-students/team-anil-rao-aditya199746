function countVowels(str) {
    const vowels = "aeiouAEIOU";
    let count = 0;
  
    for (let char of str) {
      if (vowels.includes(char)) {
        count++;
      }
    }
  
    return count;
  }
  
  function cocktailShakerSort(arr) {
    let start = 0;
    let end = arr.length - 1;
    let swapped;
  
    do {
      swapped = false;
  
      // Move the largest element to the end
      for (let i = start; i < end; i++) {
        if (countVowels(arr[i]) < countVowels(arr[i + 1])) {
          [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
          swapped = true;
        }
      }
  
      if (!swapped) {
        break;
      }
  
      end--;
  
      // Move the smallest element to the start
      for (let i = end; i > start; i--) {
        if (countVowels(arr[i]) > countVowels(arr[i - 1])) {
          [arr[i], arr[i - 1]] = [arr[i - 1], arr[i]];
          swapped = true;
        }
      }
  
      start++;
    } while (swapped);
  
    return arr;
  }
  
  const strings = ["apple", "banana", "orange", "grape", "pear"];
  const sortedStrings = cocktailShakerSort(strings);
  console.log(sortedStrings);