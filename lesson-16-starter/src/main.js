// Import the functions necessary to make the API calls
import { fetchData, postData, deleteData } from "./utils";

// Select the necessary DOM elements
const loadButton = document.querySelector('#loadBooks');
// const addForm = document.querySelector('form');
const form = document.querySelector('form');
const list = document.getElementById('bookList');

// Define the API endpoint
const endpoint = 'http://localhost:3000/books';

// Define a function to handle loading and displaying the list of books
async function loadHandler() {
    try {
        const books = await fetchData(endpoint);
        // Display the books in the list that is from our debugger.json file
        console.log(books);

        list.innerHTML = '';

        books.forEach((book) => {
            const li = document.createElement('li');
            li.textContent = `${book.id}: ${book.title} by ${book.author} (${book.year})`;
            list.appendChild(li);
        });
    } catch (error) {
        console.error(error.message);
        list.innerHTML = `<li style="color:red;">Error: ${error.message}</li>`;
    }
}

// loadHandler();

// Define a function to handle form submission for adding a new book
async function submitHandler(e) {
    e.preventDefault(); // never reload the page
    const form = e.target;
    const button = e.submitter;
    const action = button.dataset.action;
    
    if (action === 'add') {
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());
        data['year'] = Number(data.year); //convert year to a number

        try {
            await postData(endpoint, data);

            // Call loadHandler to refresh the list 
            loadHandler();
        } catch (error) {
            // Display a better error for the user
            console.error('Error submitting form:', error);
        }
    } else if (action === 'delete') {
        const bookId = document.querySelector('#bookid').value;
        
        if (!bookId) {
           return; 
        }
        
        await deleteData(endpoint, bookId);
    }
}

// Attach event listeners to the button and form
loadButton.addEventListener('click', loadHandler);
// addForm.addEventListener('submit', submitHandler);
form.addEventListener('submit', submitHandler);

// TODO: Add delete functionality
// Modified function submitHandler(...)
