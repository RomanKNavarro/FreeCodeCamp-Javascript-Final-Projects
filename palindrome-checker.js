function palindrome(str) {
  var letterNumRegex = /^[0-9a-zA-Z]+$/; // IGNORE ALL NON-ALPHA-NUMERIC CHARACTERS
  let filteredArr = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i].match(letterNumRegex)) filteredArr.push(str[i].toLowerCase());
  }
  return filteredArr.join('') === filteredArr.reverse().join('')? true: false;  // first time actually using ternary operator
}
//palindrome('eye') -> true

palindrome("eye");