let darkMode = false; // Initially, light mode is active

// Function to toggle between light and dark mode
function toggleMode() {
    const body = document.body;
    const button = document.querySelector('#screen-mode');

    if (darkMode) {
        // Switch to light mode
        body.style.backgroundColor = "white";
        body.style.color = "black";
        button.style.backgroundColor = "gold";
        button.style.color = "black";
    } else {
        // Switch to dark mode
        body.style.backgroundColor = "black";
        body.style.color = "white";
        button.style.backgroundColor = "indigo";
        button.style.color = "white";
    }
    // Toggle the mode
    darkMode = !darkMode;
}

// Event listener for mode toggle button
document.querySelector('#screen-mode').addEventListener('click', toggleMode);




// Handles form submission
const handlingFormSubmit = function(event) {
    event.preventDefault();
    const username = document.querySelector('#username').value.trim();
    const title = document.querySelector('#title').value.trim();
    const content = document.querySelector('#content').value.trim();

    if (!username || !title || !content) {
        const errorHandler = document.querySelector('#error');
        errorHandler.textContent = 'Please complete all the fields';
        return; // Prevent form submission if fields are empty
    }

    const inputData = {
        username: username,
        title: title,
        content: content,
    };

    // Store form data in localStorage
    // Modify the key to store multiple submissions
    localStorage.setItem('blogPost', JSON.stringify(inputData));

    // Redirect to blog.html
    window.location.href = './blog.html';
}

// Event listener for form submission
document.querySelector('#submit').addEventListener('click', handlingFormSubmit);
