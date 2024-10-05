const myLibrary = [];

function Book(title, author, pages, status) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
    this.info = function () {
        return `${this.title} by ${this.author}, ${this.pages} pages, ${this.status}`
    };
}

function addBookToLibrary() {
    // do stuff here
}


// DOM
const addBookModal = document.querySelector("#addBookModal");

const addBookButton = document.querySelector(".addBookButton");

const submitButton = document.querySelector(".submitButton");

addBookButton.addEventListener("click", function() {
    addBookModal.style.display = "flex";
})

submitButton.addEventListener("click", function() {
    addBookModal.style.display = "none";
})

window.addEventListener("click", function(event) {
    if(event.target == addBookModal) {
        addBookModal.style.display = "none";
    }
})