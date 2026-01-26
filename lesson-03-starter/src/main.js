console.log('Lesson 03 starter loaded');

// Instructor TODO: 
// 1. Declare variables using var, let, const
// var - AVOID USING
// let - if you need to re-assign the variable
// const - use as a default value and cannot be re-assigned
var greeting = 'Hello World'; //string variable Note: AVOID USING var
let count = 3; // number variable
const isActive = true; // boolean variable

// 2. Log their types with console.log(typeof …)
console.log('Type of greeting: ', typeof greeting);
console.log('Type of count: ', typeof count);
console.log('Type of isActive: ', typeof isActive);

// 3. Try built-in functions: alert(), prompt(), confirm(), parseInt(), toString()
alert('Welcome to the JavaScript demo.');
const userName = prompt('Enter your name:');
const continueDemo = confirm(`Hi ${userName} shall we continue the demo?`); // Interpolation '`'
console.log(userName + ' chose to: ', continueDemo); // Concatenation with '+'
let count2 = '4';
let total;
total = count + parseInt(count2);
console.log(total);
console.log('Type of count: ', typeof count.toString());

// 4. Manipulate values and observe results in the console
const strNumber = '42';
const parsedNumber = parseInt(strNumber, 10);
// There are other options like parseFloat(), Number(), etc.
console.log(`Parsed "${strNumber}" to ${typeof parsedNumber}`);
console.log(`Convert ${parsedNumber} back to ${typeof parsedNumber.toString()}`);
console.log(parseFloat(strNumber)); // It is the same with the result of a parseInt() if it is a whole number

// Student TODO: 
// Prompt the user for their name and age
// Log a greeting message using the provided name and age
const NAME = prompt("Enter your name: ");
const AGE = prompt("Enter your age: ");
console.log(`Hello ${NAME} who is ${AGE} years old.`);
//one work all small case
//const name
//more than one word = camalCase
//const fullName
 
// Arithmetic/Operations functions
// +, -, *, /, %
// Increment/decrement
// ++, --
// Assigment
// =, +=, -=, *=, /+, %=
// let num = 1;
// num += 1 is equal to num + 1 = 2
