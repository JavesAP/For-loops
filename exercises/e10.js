// EXERCISE 10
// Return an array of account holders names that contains a given letter
// Array example: bankAccounts in /data/data.js
// getClientsWithLetterInName(bankAccounts, 'e') => ['Kevin', 'Steven', ...]

export function getClientsWithLetterInName(array, letter) {
  // Your code goes here...
  var objects = [];
  var name;
  var names = [];
  for (var obj in array) {
    objects.push(array[obj].name)
    name = objects[obj]
    for (var i in name) {
      if (name[i] === letter) {
        names.push(name)
      } else if (name[i.toUpperCase()] === letter.toUpperCase()) {
        names.push(name)
      }
    }
  }
  return names;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-10"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
