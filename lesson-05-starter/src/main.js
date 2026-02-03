console.log('Lesson 05 starter loaded');

// 1. Selecting elements
const titleEl = document.querySelector('#page-title');
const taglineEl = document.querySelector('.tagline');
const heroImg = document.querySelector('#hero-img');
const dynamicBox = document.querySelector('#dynamic-box');
const footerNote = document.querySelector('#footer-note');

console.log(titleEl, taglineEl, heroImg, dynamicBox, footerNote);
// 2. textContent vs innerHTML
titleEl.textContent = 'DOM: JavaScript Window into Page Structure';
dynamicBox.innerHTML =
`
<p class="desc">
    This block was injected with <em>innerHTML</em>. It can include <strong>markup</strong>.
</p>
`;
// When you only need text (no markup), prefer textContent:

// 3. Attributes & styles
heroImg.setAttribute('alt', 'A replaceable sample image');
heroImg.style.borderColor = 'red';

// 4. Create small helper functions for reuse (updateText and updateHTML)
// OPTIONAL: more helpers for attributes and styles

// A javaScript function structure
// function functionName([parameters1], [parameters2], ...) {}
// function functionName() {}
function updateText(selector, text) {
    const el = document.querySelector(selector);
    // ! = not
    if (!el) {
        return console.warn('No element found for', selector);
    }

    el.textContent = text;
}

function updateHTML(selector, html) {
    const el = document.querySelector(selector);
    // ! = not
    if (!el) {
        return console.warn('No element found for', selector);
    }

    el.innerHTML = html;
}

function setAttr(selector, attrName, attrValue) {
    const el = document.querySelector(selector);

    if (!el) {
        return console.warn('No element found for', selector);
    }

    // heroImg.setAttribute('alt', 'A replaceable sample image');
    el.setAttribute(attrName, attrValue);
}

function setStyle(selector, styleObj = {}) {
    const el = document.querySelector(selector);

    if (!el) {
        return console.warn('No element found for', selector);
    }

    // k = key
    // v = value
    Object.entries(styleObj).forEach(([k, v]) => {
        el.style[k] = v;
    });
}
// 5. Use helpers to perform simple tasks
// OPTIONAL: use attribute and style helpers if defined
updateText('.tagline', 'Selecting, reading, and modifying nodes with JavaScript.');

updateHTML('#dynamic-box', 
    `
        <p class="desc">
            Replaced via <code>updateHTML()</code>. Notice how we can inject different markup here.
        </p>
    `
);

setAttr('#hero-img', 'title', 'Hover title set from JS');
setAttr('#feature-list', 'class', 'ulFeatures');

setStyle('#hero-img', { borderColor: 'navy' });
// An Object contains a key: value
// {
//     key1: value1,
//     key2: value2,
//     ...
// }
// 6. Footer text tweak (demonstrate class toggle & style change)

// Require innerHTML here to render the &copy; entity correctly
