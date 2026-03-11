// import dayjs from 'dayjs';
// perform a named import
import { greetUser, getDateToday } from './utils.js';
// perform a default import
import utils from './utils.js';
// ./ - relative path that describes the location of a file relative to where you currently are
//    - start from the current folder

console.log('Lesson 14 starter loaded');

const name = prompt('Enter your name:');
const message = greetUser(name || utils.defaultName);
// const currentDate = dayjs().format('dddd, MMMM D, YYYY');
const currentDate = getDateToday();

// var today = document.querySelector('#today')
// today.textContent = `Today is ${currentDate}`;
document.querySelector('#today').textContent = `Today is ${currentDate}`;
document.querySelector('#greeting').textContent = message;
