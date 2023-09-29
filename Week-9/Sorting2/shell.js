function parseDate(dateStr) {
    return new Date(dateStr);
  }
  
  function shellSortDates(arr) {
    const n = arr.length;
  
    for (let gap = Math.floor(n / 2); gap > 0; gap = Math.floor(gap / 2)) {
      for (let i = gap; i < n; i++) {
        const temp = arr[i];
        let j;
  
        for (j = i; j >= gap && parseDate(arr[j - gap]) > parseDate(temp); j -= gap) {
          arr[j] = arr[j - gap];
        }
  
        arr[j] = temp;
      }
    }
  
    return arr;
  }
  
  const dates = [
    "2023-07-03 12:30:15",
    "2023-08-18 09:45:30",
    "2023-06-20 15:10:00",
    "2023-07-03 10:20:45"
  ];
  
  const sortedDates = shellSortDates(dates);
  console.log(sortedDates);