let myLibrary = [];

const newBook = document.getElementById("new-book")

// Book constructor
function Book (title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    // this.info = function() {
    //     return (`${this.title} by ${this.author}, ${this.pages} pages, `)
    // }
}

function render() {
    const display = document.getElementById('Library-container');
    const books = document.querySelectorAll('.book');
    books.forEach(book => display.removeChild(book));
   
    for (let i=0; i<myLibrary.length; i++){
        createBook(myLibrary[i]);
    }
}

// Add book to Library
function addBookToLibrary() {
    let title = document.querySelector("#title").value;
    let author = document.querySelector("#author").value;
    let pages = document.querySelector("#pages").value;
    let read = document.querySelector("#read").checked;
    let newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
    console.log(myLibrary);
    render();
} 


// button event listeners to create a new book, add a new book to page, and to close popup

const newBookBtn = document.getElementById("new-book-button");

newBookBtn.addEventListener("click", function() {
    const newBookForm = document.getElementsByClassName("new-book-card")[0];
    newBookForm.style.display = "block";
})

const addBtn = document.querySelector("#add-button");
addBtn.addEventListener("click", addBookToLibrary);

document.querySelector("#new-book-form").addEventListener("submit", function() {
    event.preventDefault();
    addBookToLibrary();
})

//Creates book visual in browser
function render() {
    const display = document.getElementById('Library-container');
    const books = document.querySelectorAll('.book');
    books.forEach(book => display.removeChild(book));
   
    for (let i=0; i<myLibrary.length; i++){
        createBook(myLibrary[i]);
    }
}

  
// const closePopUp = document.getElementsByTagName("span");
// closePopUp.addEventListener('click', () => popUpForm.style.display = 'none');