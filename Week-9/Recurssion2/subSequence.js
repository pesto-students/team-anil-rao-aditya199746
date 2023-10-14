function findSubsequences(str, index = 0, current = '', subsequences = []) {
    if (index === str.length) {
      if (current !== '') {
        subsequences.push(current);
      }
      return;
    }
  
    // Include the current character
    findSubsequences(str, index + 1, current + str[index], subsequences);
  
    // Exclude the current character
    findSubsequences(str, index + 1, current, subsequences);
  }
  
  const inputString = "abc";
  const result = [];
  findSubsequences(inputString, 0, '', result);
  console.log(result);