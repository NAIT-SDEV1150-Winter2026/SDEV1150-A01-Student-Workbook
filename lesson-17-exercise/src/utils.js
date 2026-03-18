// Define the API endpoint
const API_URL = 'http://localhost:3000/todos';

async function loadTodos() {
    let todos;

    // try {
    //      // code that might fail
    // } catch (error) {
    //      // runs if an error occurs
    // } finally {
    //      // ALWAYS runs
    // }
    try {
        const response = await fetch(API_URL);

        if (!response.ok) {
            throw new Error(`HTTP ${response.status}`);
        }

        todos = await response.json();
        
    } catch (err) {
        todos = '';
        alert(`Failed to get: ${err.message}`);
    }

    return todos;
}

async function addTodo(text) {
    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ text, done: false })
        }); 

        if (!response.ok) {
            throw new Error(`HTTP ${response.status}`);
        }
    } catch (err) {
        alert(`Failed to add: ${err.message}`);
    }
}

async function deleteTodo(id) {
    try {
        const response = await fetch(`${API_URL}/${id}`, { method: 'DELETE' });

        if (!response.ok) {
            throw new Error(`HTTP ${response.status}`);
        }
    } catch (err) {
        alert(`Failed to delete: ${err.message}`);
    }
}

async function updateTodo(id, done) {
    try {
        const response = await fetch(`${API_URL}/${id}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ done })
        });

        if (!response.ok) {
            throw new Error(`HTTP ${response.status}`);
        }
    } catch (err) {
        alert(`Failed to update: ${err.message}`);
    }
}

export { loadTodos, addTodo, deleteTodo, updateTodo }