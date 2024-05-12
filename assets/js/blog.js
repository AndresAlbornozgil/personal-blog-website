// const blogPostTransition = function () {
//     // Retrieve data from localStorage
//     const blogContainer = document.getElementById('blog-post');


//     // if (storedData) {
//     const storedData = localStorage.getItem('blogPost');
//     // Parse JSON data
//     const dataArray = JSON.parse(storedData);

//     // }
//     for (let i = 0; i < dataArray.length; i++) {
//         const blogItem = dataArray[i];

//         const card = document.createElement('article')
//         card.setAttribute("class", "card")
//         const cardBody = document.createElement('div')
//         card.appendChild(cardBody);
//         cardBody.setAttribute("class", "cardBody")
//         const userNameEl = document.createElement('h5')
//         const titleEl = document.createElement('h6')
//         const contentEl = document.createElement('p')
//         // Display data on the page
//         userNameEl.textContent = blogItem.username;
//         titleEl.textContent = blogItem.title;
//         contentEl.textContent = blogItem.content;
//         cardBody.append(userNameEl, titleEl, contentEl);
//         blogContainer.append(card);
//     }
// }

// // Call the function when the script is loaded
// blogPostTransition();








const blogPostTransition = function () {
    // Retrieve data from localStorage
    const blogContainer = document.getElementById('blog-post');

    const storedData = localStorage.getItem('blogPost');
    if (storedData) {
        // Parse JSON data
        const dataArray = JSON.parse(storedData);

        for (let i = 0; i < dataArray.length; i++) {
            const blogItem = dataArray[i];

            const card = document.createElement('article');
            card.setAttribute("class", "card");
            const cardBody = document.createElement('div');
            card.appendChild(cardBody);
            cardBody.setAttribute("class", "cardBody");
            const userNameEl = document.createElement('h5');
            const titleEl = document.createElement('h6');
            const contentEl = document.createElement('p');
            // Display data on the page
            userNameEl.textContent = blogItem.username;
            titleEl.textContent = blogItem.title;
            contentEl.textContent = blogItem.content;
            cardBody.append(userNameEl, titleEl, contentEl);
            blogContainer.append(card);
        }
    }
}

// Call the function when the script is loaded
blogPostTransition();
