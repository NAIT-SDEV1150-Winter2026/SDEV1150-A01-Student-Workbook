import { loadTodos, addTodo, deleteTodo, updateTodo } from "./utils";

const form = document.querySelector('#todo-form');
const list = document.querySelector('#todo-list');
const input = document.querySelector('#todo-input');

async function renderTodos() {
    list.innerHTML = '';
    const todos = await loadTodos();
    console.log(todos);
    
    if (!todos.length) {
        list.innerHTML = '<li>No todos yet.</li>';
        return;
    }

    todos.forEach(t => {
        const li = document.createElement('li');
        li.innerHTML = `
            <label>
                <input type="checkbox" ${t.done ? 'checked' : ''} data-action="toggle" data-id="${t.id}">
                <span>${t.text}</span>
            </label>
            <button data-action="delete" data-id="${t.id}">Delete</button>
        `;

        list.appendChild(li);
    });
}

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const text = (input.value || '').trim();

    if (!text) {
        return;
    }

    input.disabled = true;
    
    try {
        await addTodo(text);
        form.reset();
        input.focus();
    } finally {
        input.disabled = false;
        renderTodos();
    }
});

list.addEventListener('click', async (e) => {
    // e.target - the exact element you clicked
    // JavaScript converts data-* attributes into a dataset object:
    // HTML attribute                JS access
    // data-id="1"                   element.dataset.id
    // data-action="delete"          element.dataset.action
    const id = e.target.dataset.id;
    const action = e.target.dataset.action;

    //If there is no valid id or no valid action, stop and do nothing.
    // It is a guard clause. It stops the function early if required values are missing.
    if (!id || !action) {
        return;
    }

    if (action === 'delete') {
        await deleteTodo(id);
        renderTodos();
    }
});

list.addEventListener('change', async (e) => {
    const id = e.target.dataset.id;
    const done = e.target.checked;

    await updateTodo(id, done);
    renderTodos();
});

renderTodos();


// Note:
// The line
// "$schema": "./node_modules/json-server/schema.json"
// was automatically added to your db.json. This entry defines the expected structure of your local API database and is mainly used for editor assistance.

// Why this happens:
// - Visual Studio Code may auto-insert $schema when:
//    - You open a recognized JSON file
//    - Relevant extensions (e.g., JSON tools) are installed
// - It may also be added if:
//    - You (or a setup tool) initialized a json-server configuration
//    - A formatter or extension inserted it (e.g., JSON language support, REST clients, API testing tools)

// Important:
// This line does not affect your API behavior.
// json-server completely ignores the $schema property when serving data, so your API requests (GET, POST, etc.) will work exactly the same with or without it.
