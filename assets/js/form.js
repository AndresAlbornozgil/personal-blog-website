let darkMode = false; // Initially, light mode is active

function toggleMode() {
    const body = document.querySelector('body');
    const button = document.querySelector('#screen-mode');

    if (darkMode) {
        // Switch to light mode
        body.style.backgroundColor = "white";
        body.style.color = "black";
        document.querySelector('#screen-mode').style.backgroundColor = "gold"
        document.querySelector('#screen-mode').style.color = "black"
        document.querySelector('#submit').style.backgroundColor = "black"
    } else {
        // Switch to dark mode
        document.querySelector('body').style.backgroundColor = "black"
        document.querySelector('body').style.color = "white"
        document.querySelector('#submit').style.backgroundColor = "indigo"
        document.querySelector('#screen-mode').style.backgroundColor = "indigo"
        document.querySelector('#screen-mode').style.color = "white"
    }

    // Toggle the mode
    darkMode = !darkMode;
}

document.querySelector('#screen-mode').addEventListener('click', toggleMode);

const handlingFormSubmit = function(event) {
    event.preventDefault();
    const username = document.querySelector('#username').value.trim();
    const title = document.querySelector('#title').value.trim();
    const content = document.querySelector('#content').value.trim();

    if (!username || !title || !content) {
        const errorHandler = document.querySelector('#error');
        errorHandler.textContent = 'Please complete all the fields'
    }

    const inputData = {
        username: username,
        title: title,
        content: content,
    }

    localStorage.setItem('blogPost', JSON.stringify(inputData));

    location.href='./blog.html'
}

