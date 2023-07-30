function reverseString(str) {
    if (str.length <= 1) {
      return str;
    } else {
      const firstChar = str[0];
      const restOfString = str.slice(1);
      return reverseString(restOfString) + firstChar;
    }
  }