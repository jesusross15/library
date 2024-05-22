let myLibrary = [];

const newBook = document.getElementById("new-book")

// Book constructor
function Book (title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        return (`${this.title} by ${this.author}, ${this.pages} pages, `)
    }
}

// Add book to Library
// function addBookToLibrary() {

// }


// button event listeners to create a new book, add a new book to page, and to close popup
  const addBtn = document.querySelector('#add-button');
  addBtn.addEventListener('click', addBookToLibrary);
  
  const newBookBtn = document.querySelector('#new-book-button');
  newBookBtn.addEventListener('click', () => popUpForm.style.display = 'block');
  
  const popUpForm = document.getElementById('new-book-card');
  const closePopUp = document.getElementsByTagName('span')[0];
  closePopUp.addEventListener('click', () => popUpForm.style.display = 'none');