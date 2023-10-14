function printPermutations(str, prefix = '') {
    if (str.length === 0) {
      console.log(prefix);
    } else {
      for (let i = 0; i < str.length; i++) {
        const rem = str.slice(0, i) + str.slice(i + 1);
        printPermutations(rem, prefix + str[i]);
      }
    }
  }
  
  // Example usage:
  const inputString = 'abc';
  printPermutations(inputString);