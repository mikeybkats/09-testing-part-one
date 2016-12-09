var assert = require('./vendor/assert');

/* Welcome to an intro to testing! This exercise
    will help you to become familiar with testing concepts.
    We test to check the output of our apps. That is - we are not
    checking for HOW something works, but the end RESULT and
    state of a particular place in our application.*/

/* The 'assert' that we are loading in at the top is our test library.
    This library uses one function, called 'assert',
    which accepts three arguments:
    1. An expression to check whether true or false,
    2. A success message string if true.
    3. A failing message string if false.

    Common practice in testing is to write a test, ensure
      that it fails FIRST - for the right reason! - and then write
      just the minimum amount of code to make the test pass
      ('red-green refactoring' is the jargon term for this). */

//  Below, we will write an example of our test in action:

var ricksFaveAnimal = ' ';


function testRicksFaveAnimal() {
  assert (ricksFaveAnimal, 'ricksFaveAnimal exists',
  'ricksFaveAnimal is a ' + typeof ricksFaveAnimal);
}

testRicksFaveAnimal();


/* ========================================================================
------------------------- Favorite Animals --------------------------------
===========================================================================
The zoo is closing in 20 minutes. You still haven't seen your four favorite
animals. You only have time for one. How do you choose just one?!
*/


/* NOTE:
Write a test FIRST! Use the 'assert()' function below to ensure
that an element in the favoriteAnimals array was assigned to nextAnimal.

No hard-coded results allowed! (e.g. -  seeing if nextAnimal is equal to
just 'penguin').

Remember to: pass in your expression, and write a success and a failure
message. */

var favoriteAnimals = ['elephants', 'penguins', 'eagles', 'camels'];
var nextAnimal;

function testWhichAnimal() {
  // TODO: Complete this assert function.
  // Don't forget your three arguments!
  assert(nextAnimal, 'nextAnimal is equal to the object in favoriteAnimals', 'nextAnimal is a ' + typeof nextAnimal);//that the favoriteAnimals array was assigned to nextAnimal
};

testWhichAnimal();
/* TODO:
Now assign one of your favorite animals dynamically, by chance, to the
nextAnimal variable ... then invoke your test!
When ready, execute this program in your terminal with node
(node bonus-testing-part-one)  :-)
Your code begins on the next line: */
var favoriteAnimals = favoriteAnimals[Math.round(Math.random() * (favoriteAnimals.length - 0) + 0)];
console.log(favoriteAnimals);

// animalsTest = function(){
//   favoriteAnimals.map(function(current, index, value){
//     if (nextAnimal === current){
//       return true;
//     }else { return false; }
//   }).forEach(function(object){
//     if (object === true){
//       nextAnimal = true;
//     } else { nextAnimal = false; }
//   });
//   return nextAnimal;
// };
