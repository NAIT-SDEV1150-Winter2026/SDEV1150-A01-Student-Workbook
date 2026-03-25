// Import the user-card component to register the custom element
import './user-card.js';
// Create an additional user card using HTML and append it to the main element
const dynamicUserCard = `
 <user-card avatar="https://placehold.co/80x80/7700ff/ffffff">
 <span slot="name">Mipha</span>
 <span slot = "description">Zora Champion</span>
     </user-card>`;
    const main = document.querySelector('main');
    main.insertAdjacentHTML('beforeend',dynamicUserCard);
// Create another user card using JavaScript DOM API only and append it to the main element
const anotherUserCard = document.createElement('user-card');
anotherUserCard.setAttribute('avatar',"https://placehold.co/80x80/7700ff/fffff");
const nameSpan = document.createElement("span");
const descSpan = document.createElement("span");
nameSpan.setAttribute('slot','name');
descSpan.setAttribute('slot','description');
nameSpan.textContent = 'Yunobo';
descSpan.textContent='President of YunoboCO';//<span slot="name">Mipha</span>
 //<span slot = "description">Zora Champion</span>
 anotherUserCard.appendChild(nameSpan);
 anotherUserCard.appendChild(descSpan);
 document.querySelector('main').appendChild(anotherUserCard);
