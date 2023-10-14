function* stringToSymbolIterator(arr) {
    for (const str of arr) {
      yield Symbol(str);
    }
  }
  
  // Example usage
  const strings = ['hello', 'world', 'test'];
  const symbolIterator = stringToSymbolIterator(strings);
  
  for (const symbol of symbolIterator) {
    console.log(symbol);
  }