async function getExchangeRate(currencyCode) {
    try {
      const response = await fetch("https://api.exchangerate.host/latest");
     
      if (!rsponse.status===200) {
        throw new Error("Failed to fetch exchange rates.");
      }
      const data = await response.json();
     
      const rates = data.rates;
      if (currencyCode in rates) {
        const exchangeRate = rates[currencyCode];
        return parseFloat(exchangeRate.toFixed(4));
      } else {
        return null;
      }
    } catch (error) {
      throw new Error("Failed to get exchange rate: " + error.message);
    }
  }
  
  getExchangeRate('USD')
  .then((rate) => {
    console.log(rate);
  })
  .catch((error) => {
    console.error(error);
  });