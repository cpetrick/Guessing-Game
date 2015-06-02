// var randomNumber = Math.floor(Math.random() * 6 ) + 1;
// var guess = prompt(I'm thinking of a number between 1 and 6.  What is it?);
// if (parseInt(guess) === randomNumber ) {
//   document.write('<p>You guessed the number!</p>');
// } else {
//   document.write('<p>Sorry.  The number was ' + randomNumber + '.</p>');
// }


var randomNumber = Math.floor(Math.random() * 1000 ) + 1;
var guess = prompt('I would like you to try and guess the correct random number between 1 and 1000. See if you can.');
if (parseInt(guess) === randomNumber ) {
  document.write('<p>Nice Work! You guessed the number!</p>');
} else {
    document.write('<p>Sorry. The number was ' + randomNumber + '.</p>');
}
//Hello//
