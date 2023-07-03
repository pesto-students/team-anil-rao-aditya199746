function createWeatherApp() {
    const temperatureData = {
      'New York': 20,
      'London': 18,
      'Paris': 22,
      'Tokyo': 25,
      'Sydney': 28,
    };
  
    const cache = {};
  
    function getTemperatureForCity(city) {
      if (cache[city]) {
        console.log(`Temperature for ${city} retrieved from cache`);
        return cache[city];
      }
  
      if (temperatureData[city]) {
        cache[city] = temperatureData[city];
        console.log(`Temperature for ${city} retrieved from API`);
        return cache[city];
      }
  
      console.log(`Temperature data not available for ${city}`);
      return null;
    }
  
    return {
      getTemperatureForCity,
    };
  }
  
  // Usage
  const weatherApp = createWeatherApp();
  
  const temperature1 = weatherApp.getTemperatureForCity('New York');
  console.log(temperature1); // 20
  
  const temperature2 = weatherApp.getTemperatureForCity('New York');
  console.log(temperature2); // 20 (retrieved from cache)
  
  const temperature3 = weatherApp.getTemperatureForCity('London');
  console.log(temperature3); // 18
  
  const temperature4 = weatherApp.getTemperatureForCity('London');
  console.log(temperature4); // 18 (retrieved from cache)