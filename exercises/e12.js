
// EXERCISE 12
// Return an array of all deposits greater than 100
// Array example: bankAccounts in /data/data.js
// getAllDepositsGreaterThanOneHundred(bankAccounts) => [3432, 43242.34, 23432]

export function getAllDepositsGreaterThanOneHundred(array) {
  // Your code goes here...
  var someFunds = [];
  for (var obj in array) {
    for (var i = 0; i <= array[obj].deposits?.length; i++ )
    if (array[obj].deposits[i] > 100) {
      someFunds.push(array[obj]['deposits'][i]);
    }
  }
  return someFunds;
}



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-12"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
