console.log('Lesson 10 starter loaded');

// 1. Select required elements
const form = document.querySelector('#contact-form');
const result = document.querySelector('#result');

// 2. Function to gather and structure form data
  // Instructor TODO: get the name
  function serializeForm(formEl) {
    // Different ways to access and retrieve the value from the input field
    // using various DOM selection approaches:
    // Using a CSS selector with querySelector
    // const fullNameValue = document.querySelector('input[name="fullName"]').value;

    // Accessing the input via the form's elements collection (bracket notation)
    // const fullNameValue = formEl.elements['fullName'].value;
    
    // Accessing the input via the form's elements collection (dot notation)
    // This works when the input's name is a valid JavaScript identifier
    const fullNameValue = formEl.elements.fullName.value;
    const emailValue = formEl.elements.email.value;
    const bioValue = formEl.elements.bio.value;
    const planValue = formEl.elements.plan.value;

    let topicValue = '';

    let count = 0;
    // formEl.elements.topicValue.forEach(function (el) {});
    formEl.elements.topics.forEach((el) => {
      if (el.checked) {
        count++;
      }
    });
    
    let i = 1;
    formEl.elements.topics.forEach((el) => {
      if (el.checked) {
        // The variables `count` and `i`, along with the conditional statements,
        // are used to properly format the `topicValue` string.
        if (count === 1) {
          topicValue = `${el.value}`;
        } else if (i < count) {
          topicValue += `${el.value}, `;
        } else {
          topicValue += `and ${el.value}`;
        }

        i++;
      }
    });
  
    return {
      fullName: fullNameValue,
      email: emailValue,
      bio: bioValue,
      plan: planValue,
      topics: topicValue
    };
  }

// 3. Handle form submission
// Use 'submit' event on the form, not 'click' on the button
// Prevent default behavior (navigation/reload) using event.preventDefault()
// Instructor TODO: display the fullName value
form.addEventListener('submit', (e) => {
  e.preventDefault();

  const data = serializeForm(form);

  result.textContent =
  `
    Submission received:
    - Name: ${data.fullName}
    - Email: ${data.email}
    - Bio: ${data.bio}
    - Plan: ${data.plan}
    - Topics: ${data.topics}
  `;
});
  
// 4. Handle form reset - reset the result area text when the form is reset
form.addEventListener('reset', () => {
  result.textContent = 'Awaiting submission…';
});
