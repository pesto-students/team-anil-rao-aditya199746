function expandFromCenter(s, left, right) {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      left--;
      right++;
    }
    return right - left - 1;
  }
  
  function longestPalindromicSubstring(s) {
    if (!s || s.length === 0) {
      return '';
    }
  
    let start = 0;
    let maxLength = 0;
  
    for (let i = 0; i < s.length; i++) {
      const len1 = expandFromCenter(s, i, i); // Odd-length palindrome
      const len2 = expandFromCenter(s, i, i + 1); // Even-length palindrome
  
      const currentLength = Math.max(len1, len2);
  
      if (currentLength > maxLength) {
        maxLength = currentLength;
        start = i - Math.floor((currentLength - 1) / 2);
      }
    }
  
    return s.slice(start, start + maxLength);
  }
  
  // Example usage:
  const inputString = 'babad';
  const longestPalindrome = longestPalindromicSubstring(inputString);
  console.log("Longest Palindromic Substring:", longestPalindrome);