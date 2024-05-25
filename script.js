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

// Add book to Library
function addBookToLibrary() {
    let title = document.querySelector("#title").value;
    let author = document.querySelector("#author").value;
    let pages = document.querySelector("#pages").value;
    let read = document.querySelector("#read").checked;

} 


// button event listeners to create a new book, add a new book to page, and to close popup

const newBookBtn = document.getElementById("new-book-button");

newBookBtn.addEventListener("click", function() {
    const newBookForm = document.getElementsByClassName("new-book-card")[0];
    newBookForm.style.display = "block";
})
  
const addBtn = document.querySelector("#add-button");
addBtn.addEventListener("click", addBookToLibrary);

//   const popUpForm = document.getElementById('new-book-card');
//   const closePopUp = document.getElementsByTagName('span')[0];
//   closePopUp.addEventListener('click', () => popUpForm.style.display = 'none');
 

  
