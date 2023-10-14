function findMaxStrengthHorse(horses, K) {
    let left = 0;
    let right = horses.length - 1;
    let maxStrengthIndex = -1;
  
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
  
      // Simulate the races for comparison
      const races = Math.min(K, mid + 1);
      let maxStrength = -1;
  
      for (let i = 0; i < races; i++) {
        maxStrength = Math.max(maxStrength, horses[mid - i]);
      }
  
      if (maxStrength === horses[mid]) {
        maxStrengthIndex = mid;
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  
    return maxStrengthIndex;
  }
  
  const horses = [3, 5, 8, 2, 4, 10];
  const maxRaces = 2;
  const maxStrengthIndex = findMaxStrengthHorse(horses, maxRaces);
  
  if (maxStrengthIndex !== -1) {
    console.log(`The horse with maximum strength is at index ${maxStrengthIndex}.`);
  } else {
    console.log("No horse found.");
  }