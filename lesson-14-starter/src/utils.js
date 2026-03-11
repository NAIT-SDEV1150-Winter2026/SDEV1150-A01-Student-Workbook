import dayjs from 'dayjs';

// export the named function `greetUser`
// export function greetUser(name) {
//     return `Welcome to the app ${name}`;
// }

function greetUser(name) {
    return `Welcome to the app ${name}`;
}

function getDateToday() {    
    return dayjs().format('dddd, MMMM D, YYYY');
}

export { greetUser, getDateToday };

export default { defaultName: 'Jane Doe' };
