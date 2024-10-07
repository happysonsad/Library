const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

    this.bookTitle = function () {
        return `${this.title}`;
    }
    this.bookAuthor = function () {
        return ` by ${this.author}`;
    }
    this.bookPages = function () {
        return ` ${this.pages} pages`;
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

        const bookInfoContainer = document.createElement("div");
        bookInfoContainer.classList.add("bookInfoContainer");

        const bookTitle = document.createElement("p");
        bookTitle.classList.add("bookTitle");
        bookTitle.textContent = book.bookTitle();

        const bookAuthor = document.createElement("p");
        bookAuthor.classList.add("bookAuthor");
        bookAuthor.textContent = book.bookAuthor();
        
        const bookPages = document.createElement("p");
        bookPages.classList.add("bookPages");
        bookPages.textContent = book.bookPages();


        const buttonContainer = document.createElement("div");
        buttonContainer.classList.add("libraryButtonContainer");

        const bookRead = document.createElement("button")
        bookRead.textContent = book.read ? "Read" : "Not Read";
        bookRead.classList.add("readStatus");
        bookRead.addEventListener("click", () => {
            book.read = !book.read;
            updateLilbraryDisplay();
        })

        const removeButton = document.createElement("button");
        removeButton.classList.add("removeButton");
        removeButton.textContent = "Delete";
        removeButton.addEventListener("click", () => {
            myLibrary.splice(index, 1);
            updateLilbraryDisplay();
        })


        bookInfoContainer.appendChild(bookTitle);
        bookInfoContainer.appendChild(bookAuthor);
        bookInfoContainer.appendChild(bookPages);

        buttonContainer.appendChild(bookRead);
        buttonContainer.appendChild(removeButton);

        BookCard.appendChild(bookInfoContainer);
        BookCard.appendChild(buttonContainer);

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