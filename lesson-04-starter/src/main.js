console.log('Lesson 04 starter loaded');

// Instructor TODO:
// 1. Simple if
const x = 5;
if (x > 0) {
  console.log('x is positive');
}

// 2. if-else
  // the value from the left is eqaul to the value from the right: ==
if (x % 2 == 0) {
  console.log('x is even');
} else {
  console.log('x is odd');
}

// 3. Nested if-else
if (x > 10) {
  console.log('x is greater than 10');
} else if (x < 0) {
  console.log('x is non-positive');
} else {
  console.log('x is between 1 and 10');
}

// Additional condition handling via switch-case
switch(true) {
  case x < 0:
      console.log('x is non-positive');
      break;
  case x < 10:
      console.log('x is greater than 10');
      break;
    default:
      console.log('x is greater than or equal to 10');
}

switch(x) {
  case 1:
      break;
  case 2:
      break;
    default:
}

// 4. while loop
let count = 3;

while (count > 0) {
  console.log('Countdown:', count);
  // count = count - 1;
  count -= 1;

  //force exit loop
  if (count == 3) {
    count = 0;
  }
}

// 5. do-while loop
let i = 0;

do {
  console.log('i is:', i);
  // i = i + 1
  i++;
} while (i < 3);

// 6. for loop
for (let j = 0; j < 3; j++) {
  console.log(`j = ${j}`);
}
let h;
for (h = 0; h < 3; h++) {
  console.log(`h = ${h}`);
}

// Student TODO:
// 7. Snippet with bugs for debugging practice
// Snippet with bugs for debugging practice - uncomment when ready
const num = 10;

if (num < 5) { // Intentional bug: should be num > 5
  console.log('num is greater than 5');
} else {
  console.log('num is 5 or less');
}

// k = k - 1 : k--
for (let k = 0; k < 3; k = k - 1) { // Intentional bug: k should incrementalert();
  console.log(k);
}

// 8. Debugging practice
// alert(num);