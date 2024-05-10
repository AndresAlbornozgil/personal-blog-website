let darkMode = false; // Initially, light mode is active

// Function to toggle between light and dark mode
function toggleMode() {
    const body = document.body;
    const screenModeButton = document.querySelector('#screen-mode');
    const backButton = document.querySelector('#back-button');

    // Toggle the mode
    darkMode = !darkMode;

    if (darkMode) {
        // Switch to dark mode
        body.style.backgroundColor = "black";
        body.style.color = "white";
        screenModeButton.style.backgroundColor = "indigo";
        screenModeButton.style.color = "white";
        backButton.style.backgroundColor = "white";
        backButton.style.color = "black";
    } else {
        // Switch to light mode
        body.style.backgroundColor = "white";
        body.style.color = "black";
        screenModeButton.style.backgroundColor = "gold";
        screenModeButton.style.color = "black";
        backButton.style.backgroundColor = "black";
        backButton.style.color = "white";
    }
}

// Event listener for mode toggle button
document.querySelector('#screen-mode').addEventListener('click', toggleMode);




// Populates blog posts in body of blog.html
const blogPostTransition = function() {
    // Retrieve data from localStorage
    const storedData = localStorage.getItem('blogPost');

    if (storedData) {
        // Parse JSON data
        const blogPost = JSON.parse(storedData);

        // Display data on the page
        document.querySelector('#username').textContent = blogPost.username;
        document.querySelector('#title').textContent = blogPost.title;
        document.querySelector('#content').textContent = blogPost.content;
    } else {
        // Handle case where no data is found in localStorage
        console.log("No blog post data found in localStorage.");
    }
}

// Call the function when the script is loaded
blogPostTransition();
