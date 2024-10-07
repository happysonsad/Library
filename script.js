const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.bookInfo = function () {
        message = `${this.title} by ${this.author}, ${this.pages} pages`;
        if (this.read) {
            message += ", read";
        } else {
            message += ", not yet read";
        } return message;
    }
}

function addBookToLibrary() {
    let title = document.querySelector("#title").value;
    let author = document.querySelector("#author").value;
    let pages = document.querySelector("#pages").value;
    let read = document.querySelector("#status").checked;
    let newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
    updateLilbraryDisplay();
    document.querySelector("#bookForm").reset();
    addBookModal.style.display = "none";
}

function updateLilbraryDisplay() {
    const Library = document.querySelector("#booksGrid");
    Library.textContent = "";

    myLibrary.forEach((book, index) => {
        const BookCard = document.createElement("div");
        BookCard.classList.add("book-card");

        const bookInfo = document.createElement("div");
        bookInfo.textContent = book.bookInfo();

        // const bookTitle = document.createElement("p");
        // bookTitle.classList.add("bookTitle");
        // bookTitle.textContent = this.title.value;

        // const bookAuthor = document.createElement("p");
        // bookAuthor.classList.add("bookAuthor");
        // bookAuthor.textContent = this.author.value;

        // const bookPages = document.createElement("p");
        // bookPages.classList.add("bookPages");
        // bookPages.textContent = this.pages.value;

        const bookRead = document.createElement("button")
        bookRead.textContent = book.read ? "Read" : "Not Read";
        bookRead.classList.add("readStatus");
        bookRead.addEventListener("click", () => {
            book.read = !book.read;
            updateLilbraryDisplay();
        })

        const removeButton = document.createElement("button");
        removeButton.classList.add("removeButton");
        removeButton.addEventListener("click", () => {
            myLibrary.splice(index, 1);
            updateLilbraryDisplay();
        })

        BookCard.appendChild(bookInfo);

        // BookCard.appendChild(bookTitle);
        // BookCard.appendChild(bookAuthor);
        // BookCard.appendChild(bookPages);

        BookCard.appendChild(bookRead);
        BookCard.appendChild(removeButton);

        Library.appendChild(BookCard);
    })
}

document.querySelector("#bookForm").addEventListener("submit", function(event) {
    event.preventDefault();
    addBookToLibrary();
    console.log(myLibrary);
})

// Modal
const addBookButton = document.querySelector(".addBookButton");

addBookButton.addEventListener("click", function() {
    addBookModal.style.display = "flex";
})

window.addEventListener("click", function(event) {
    if(event.target == addBookModal) {
        addBookModal.style.display = "none";
    }
})