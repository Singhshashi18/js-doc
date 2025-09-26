  

const searchBooks = async () => {
    const query = document.querySelector("#search").value;
    const res = await fetch(`https://openlibrary.org/search.json?q=${query}`);
    const data = await res.json();

    const result = document.querySelector("#results");
    result.innerHTML = ''; // Clear previous results

    data.docs.slice(0, 5).forEach(book => {
        const list = document.createElement("li");
        list.innerHTML = `
            <strong>${book.title}</strong>
            by ${book.author_name?.[0] || 'Unknown'}
            <button onclick="addToLibrary('${book.title.replace(/'/g, "\\'")}',
  '${(book.author_name?.[0] || 'Unknown').replace(/'/g, "\\'")}')">Add</button>
        `;
        result.appendChild(list);
    });
};

const addToLibrary = (title, author) => {
    const library = document.querySelector("#library");

    const row = document.createElement('tr');
    row.innerHTML = `
        <td>${title}</td>
        <td>${author}</td>
        <td><button onclick="removeBook(this)">Remove</button></td>
    `;
    library.appendChild(row);
};

const removeBook = (btn) => {
    btn.parentElement.parentElement.remove();
};

// Attach the function to a button
document.querySelector("#searchBtn").addEventListener("click", searchBooks);
