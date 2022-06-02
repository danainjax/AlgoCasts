// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

//Approach 1- Built in methods, split the string into an array of individual characters, reverse the chars in the array, and then join them back into a string. Note: empty string "", not " ". A space and empty string give different results.

function reverse(str) {
  return str.split('').reverse().join('')
}

module.exports = reverse
