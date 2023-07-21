// EXERCISE 11
// Return an array of withdrawal sums of each bank account.
// If the account doesn't have withdrawals, it's sum is 0.
// Array example: bankAccounts in /data/data.js
// getAllWithdrawals(bankAccounts) => [3432, 0, 43242.34, 0, 23432]

export function getAllWithdrawals(array) {
  // Your code goes here...
  //var objects = [];
  //var numberHolder;
  //var takenOut;

  var withdrawn = [];
  var sum = 0;
  for (var obj in array) {
    for (var i = 0; i <= array[obj].withdrawals?.length; i++)
    if (array[obj].withdrawals[i] > 0) {
      sum += array[obj].withdrawals[i];
    } else { 
     withdrawn.push(sum);
     sum = 0;
     withdrawn.push(0); 
    }
  }
  return withdrawn.slice(0,-1);
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-11"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
