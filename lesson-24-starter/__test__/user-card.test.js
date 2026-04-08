import {expect, test, describe, beforeEach, afterEach} from 'vitest';
import '../src/user-card.js';
let element ;
beforeEach(()=>{
    const element = document.createElement('user-card');
});
afterEach(()=>{
    element.remove();
    element = null;
})
describe('UserCard', () => {
    test('renders with default properties', () => {
        document.body.appendChild(element);
        expect(element.shadowRoot.querySelector('img').getAttribute('src')).toBe('https://placehold.co/80x80/0077ff/ffffff');
        expect(element.followed).toBe(false);
    });
    test('renders name and description', async () => {
        const nameSpan = document.createElement('span');
        nameSpan.setAttribute('slot','name');
        nameSpan.textContent = "Vitest user";
        const descSpan = document.createElement('span');
        descSpan.setAttribute('slot','description');
        descSpan.textContent = "A Vitest user for testing";
        element.appendChild(nameSpan);
        element.appendChild(descSpan);
        document.body.appendChild(element);


        const nameSlot = element.shadowRoot.querySelector('slot[name="name"]');
        const descSlot = element.shadowRoot.querySelector('slot[name="description"]');
        expect(nameSlot.assignedNodes()[0].textContent).toBe("Vitest user");
        expect(descSlot.assignedNodes()[0].textContent).toBe("A Vitest user for testing");
    })
})

