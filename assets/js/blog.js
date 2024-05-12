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

let dataArray = []

// Populates blog posts in body of blog.html
const blogPostTransition = function () {
    // Retrieve data from localStorage
    const blogContainer = document.getElementById('blog-post');


    // if (storedData) {
    const storedData = localStorage.getItem('blogPost');
    // Parse JSON data
    const dataArray = JSON.parse(storedData);

    // }
    for (let i = 0; i < dataArray.length; i++) {
        const blogItem = dataArray[i];

        const card = document.createElement('div')
        card.setAttribute("class", "card")
        const cardBody = document.createElement('div')
        card.appendChild(cardBody);
        cardBody.setAttribute("class", "cardBody")
        const userNameEl = document.createElement('h4')
        const titleEl = document.createElement('h5')
        const contentEl = document.createElement('p')
        // Display data on the page
        userNameEl.textContent = blogItem.username;
        titleEl.textContent = blogItem.title;
        contentEl.textContent = blogItem.content;
        cardBody.append(userNameEl, titleEl, contentEl);
        blogContainer.append(card);
    }
}

// Call the function when the script is loaded
blogPostTransition();
