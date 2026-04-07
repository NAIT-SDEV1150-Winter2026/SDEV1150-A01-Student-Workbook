import {expect, test, describe} from 'vitest';
import '../src/user-card.js';
describe('UserCard', () => {
    test('renders with default properties', () => {
        const element = document.createElement('user-card');
        document.body.appendChild(element);

        expect(element.shadowRoot.querySelector('img').getAttribute('src')).toBe('https://placehold.co/80x80/0077ff/ffffff');
        expect(element.followed).toBe(false);
        document.body.removeChild(element);
    })
    test('renders name and description', async () => {

    })
})
