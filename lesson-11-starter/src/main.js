console.log('Lesson 11 starter loaded');

const form = document.querySelector('#contact-form');
const result = document.querySelector('#result');

function serializeForm(formEl) {
  const fullNameValue = formEl.elements.fullName.value;
  const emailValue = formEl.elements.email.value;
  const bioValue = formEl.elements.bio.value;

  const planValue = formEl.elements.plan.value;
  let topicValue = '';
  formEl.elements.topics.forEach((el) => {
    if (el.checked) {
      topicValue += `${el.value} `;
    }
  });

  return {
    fullName: fullNameValue,
    email: emailValue,
    bio: bioValue,
    plan: planValue,
    topics: topicValue,
  };
}

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const data = serializeForm(form);

  // Student TODO: Add validation logic to the form, ensure all fields are valid before allowing submission
  // HINT: see the 'input' event listener below for examples of validation logic. Perhaps
  // you can reuse some of that code here to validate all fields on submit, or create validation
  // functions that can be reused in both places.

  // OPTIONAL - use the following alongside the `novalidate` form attribute
  // to trigger built-in HTML validation
  // if (form.checkValidity()) {
  
  result.textContent = `
    Submission received:
    - Name: ${data.fullName}
    - Email: ${data.email}
    - Bio: ${data.bio}
    - Plan: ${data.plan}
    - Topics: ${data.topics}
  `;
  // } // end if form.checkValidity()
});

form.addEventListener('reset', () => {
  result.textContent = 'Awaiting submission...';
});

// 1. Add validation logic to the form on 'input' events
form.addEventListener('input', (e) => {
  const target = e.target;
  // console.log(target);

  //setCustomValidity()
  // - a built-in HTML5 form validation method used to set a custome error message for a form field
  // - it override the browser's default validation message

  // 1.1 custom validation for fullName (must contain two words)
  if (target.name === 'fullName') {
    if (target.value.trim().includes(' ') === false) {
      target.setCustomValidity('Full name must contain two words.');
    } else {
      target.setCustomValidity('');
    }
  }

  // 1.2 custom validation for bio (minimum length)
  // if (target.name === 'bio') {
  //   if (target.value.length < 10) {
  //     target.setCustomValidity('Bio should have a minimum length of 10 characters.');
  //   } else {
  //     target.setCustomValidity('');
  //   }
  // }

  // 1.3 custom validation for email (basic '@' symbol check)
  if (target.name === 'email') {
    // if (target.value.includes('@') === false) {    
    if (!target.value.includes('@')) {
      target.setCustomValidity('Email should have an @ symbol.');
    } else {
      target.setCustomValidity('');
    }
  }

  // 1.4 report the validity status to the user
  target.reportValidity();
});

// Perform custom validation directly on the input field (not on the form submit event).
// document.querySelector('[name="bio"]') selects the first element in the DOM
// whose name attribute is exactly "bio" using a CSS attribute selector.
const bio = document.querySelector('[name="bio"]');
bio.addEventListener('input', () => {
  if (bio.value.length < 4) {
      bio.setCustomValidity('Bio should have a minimum length of 4 characters.');
    } else {
      bio.setCustomValidity('');
    }
});
  