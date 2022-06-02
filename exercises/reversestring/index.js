// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

//Approach 1- Built in methods, split the string into an array of individual characters, reverse the chars in the array, and then join them back into a string. Note: empty string "", not " ". A space and empty string give different results.

// function reverse(str) {
//   return str.split('').reverse().join('')
// }

// Approach 2- Use a for loop, create an empty string called reversed, for each char in the string, take the char and add it to the "start" of reversed, return the variable reversed.

function reverse(str) {
  let reversed = ''
  for (let char of str) {
    reversed = char + reversed
  }
  return reversed
}

module.exports = reverse
