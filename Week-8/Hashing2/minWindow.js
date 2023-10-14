function minWindow(s, t) {
    const charCount = new Map();
    for (const char of t) {
      charCount.set(char, (charCount.get(char) || 0) + 1);
    }
  
    let left = 0;
    let minWindowStart = 0;
    let minWindowSize = Infinity;
    let charsToMatch = t.length;
  
    for (let right = 0; right < s.length; right++) {
      const rightChar = s[right];
  
      if (charCount.has(rightChar)) {
        const count = charCount.get(rightChar) - 1;
        charCount.set(rightChar, count);
        if (count >= 0) charsToMatch--;
      }
  
      while (charsToMatch === 0) {
        const currentWindowSize = right - left + 1;
        if (currentWindowSize < minWindowSize) {
          minWindowSize = currentWindowSize;
          minWindowStart = left;
        }
  
        const leftChar = s[left];
        if (charCount.has(leftChar)) {
          const count = charCount.get(leftChar) + 1;
          charCount.set(leftChar, count);
          if (count > 0) charsToMatch++;
        }
  
        left++;
      }
    }
  
    return minWindowSize === Infinity ? "" : s.substr(minWindowStart, minWindowSize);
  }
  
  const s = "ADOBECODEBANC";
  const t = "ABC";
  console.log(minWindow(s, t));