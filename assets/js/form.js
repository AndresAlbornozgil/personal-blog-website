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

    // Get blogPost from local storage
    let posts = localStorage.getItem('blogPost');
    let dataArray = [];

    if (posts) {
        // Parse JSON data if it exists
        dataArray = JSON.parse(posts);
    }

    // Add inputData into the array
    dataArray.push(inputData);

    // Store form data in localStorage
    localStorage.setItem('blogPost', JSON.stringify(dataArray));

    // Redirect to blog.html
    window.location.href = './blog.html'; 
}

// Event listener for form submission
document.querySelector('#blog-form').addEventListener('submit', handlingFormSubmit);
