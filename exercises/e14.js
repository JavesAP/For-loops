
// EXERCISE 14
// The balance is supposed to equal the difference of all deposits and all withdrawals.
// Check every bank account balance and return the array of bank accounts with a wrong balance
// Array example: bankAccounts in /data/data.js
// getClientsWithWrongBalance(bankAccounts) => [{ name: 'Name1', balance: 32, ... }, { name: 'Name2', balance: 3523, ... }]

export function getClientsWithWrongBalance(array) {
  // Your code goes here...
  var taxEvasion = [];
  var difference;
  var depositSum = 0;
  var withdrawalSum = 0;
  
    for (var obj in array) {
      difference = array[obj].balance;
      for (var x = 0; x <= array[obj].deposits?.length; x++) {
        if (array[obj].deposits[x] > 0) {
          depositSum += array[obj].deposits[x];   
        }
      }
      for (var y = 0; y <= array[obj].withdrawals?.length; y++) {
         if (array[obj].withdrawals[y] > 0) {
           withdrawalSum += array[obj].withdrawals[y];
        }
      }
       if (depositSum - withdrawalSum != difference) {
          taxEvasion.push(array[obj]); 
          depositSum = 0;
          withdrawalSum = 0;
        } else if (depositSum != difference) {
          depositSum = 0;
          withdrawalSum = 0;
      }
    }
    return taxEvasion;
}



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-14"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
