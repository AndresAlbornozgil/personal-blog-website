let darkMode = false; // Initially, light mode is active

function toggleMode() {
    const body = document.querySelector('body');

    // Toggle the mode
    darkMode = !darkMode;

    if (darkMode) {
        // Switch to dark mode
        body.style.backgroundColor = "black";
        body.style.color = "white";
        document.querySelector('#screen-mode').style.backgroundColor = "indigo";
        document.querySelector('#screen-mode').style.color = "white";
        document.querySelector('#back-button').style.backgroundColor = "white";
        document.querySelector('#back-button').style.color = "black";
    } else {
        // Switch to light mode
        body.style.backgroundColor = "white";
        body.style.color = "black";
        document.querySelector('#screen-mode').style.backgroundColor = "gold";
        document.querySelector('#screen-mode').style.color = "black";
        document.querySelector('#back-button').style.backgroundColor = "black";
        document.querySelector('#back-button').style.color = "white";
    }

}

document.querySelector('#screen-mode').addEventListener('click', toggleMode);

const blogPostTransition = function() {
    const readLocalStorage = localStorage.getItem('blogPost');
    console.log(readLocalStorage);
}

blogPostTransition();
