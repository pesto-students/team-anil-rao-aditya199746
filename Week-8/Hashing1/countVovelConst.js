function isVowel(char) {
    return /[aeiou]/i.test(char); // Match both lowercase and uppercase vowels
  }
  
  function findMaxLengthSubarrayWithEqualVowelsAndConsonants(chars) {
    const n = chars.length;
    const countMap = new Map(); // To store the count of vowels and consonants encountered
    let maxLen = 0;
    let vowelCount = 0;
    let consonantCount = 0;
    
    // Initialize the map with count difference 0 at index -1 (before the array starts).
    countMap.set(0, -1);
  
    for (let i = 0; i < n; i++) {
      // Increment the count for vowels or consonants based on the current character
      const char = chars[i].toLowerCase();
      if (isVowel(char)) {
        vowelCount++;
      } else {
        consonantCount++;
      }
  
      // Calculate the difference in counts between vowels and consonants
      const countDiff = vowelCount - consonantCount;
  
      if (countMap.has(countDiff)) {
        // If the same count difference is encountered before, update the max length
        maxLen = Math.max(maxLen, i - countMap.get(countDiff));
      } else {
        // If the current count difference is not in the map, add it with the current index
        countMap.set(countDiff, i);
      }
    }
    
    return maxLen;
  }