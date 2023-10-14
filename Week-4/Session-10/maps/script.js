function calcWordFrequencies() {
    const words = prompt('Enter a list of words (separated by spaces):').split(' ');
  const wordFrequencyMap = {}

  // Count the frequency of each word
  for (const word of words) {
    if (wordFrequencyMap[word]) {
      wordFrequencyMap[word]=wordFrequencyMap[word]+1
    } else {
      wordFrequencyMap[word]=1
    }
  }
console.log("wordFrequencyMap",wordFrequencyMap)
  // Output the words and their frequencies
  for (let word in wordFrequencyMap) {
    console.log(`${word} ${wordFrequencyMap[word]}`);
  }
}

calcWordFrequencies();