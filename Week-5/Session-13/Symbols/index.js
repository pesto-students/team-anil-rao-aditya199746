function createBankingApp() {
    let counter = 1;
  
    function generateTransactionId() {
      const id = Symbol(`TRANSACTION_ID_${counter}`);
      counter++;
      return id;
    }
  
    return {
      generateTransactionId,
    };
  }
  
  // Usage
  const bankingApp = createBankingApp();
  
  const transaction1 = bankingApp.generateTransactionId();
  console.log(transaction1);
  
  const transaction2 = bankingApp.generateTransactionId();
  console.log(transaction2);
  
  const transaction3 = bankingApp.generateTransactionId();
  console.log(transaction3);