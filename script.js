// let myLibrary = ["Romeo and Juliet", "Hamlet", "Pride and Prejudice", 
// "Moby Dick"];

// function Book(myLibrary) {
//     for (let i = 0; i = myLibrary.length; i++) {
//         console.log(myLibrary)
//     }
// }

// function addBookToLibrary() {

// }

// const button = document.getElementById("new-book");
// element.addEventListener("click", addBookToLibrary);


// Function that takes in an animal and prints "____ is my favorite animal"
function favoriteAnimal(animal) {
    return animal + " is my favorite animal!";
}

console.log(favoriteAnimal('el patito'));

// Write a function called add7 that takes one number and returns that number + 7.
function add7(number) {
    return number + 7;
}

console.log(add7(7));

// Write a function called multiply that takes 2 numbers and returns their product.
function multiply(a, b) {
    return a * b;
}

console.log(multiply(7, 2))

// Write a function called capitalize that takes a string and returns that string with only the first letter capitalized.
function capitalize(string) {
    return string.uppercase
}

console.log(capitalize("MAM"))

// Write a function called lastLetter that takes a string and returns the very last letter of that string:
function lastLetter(str) {
    return str.charAt(str.length - 1);
}

console.log(lastLetter())

const newBook = document.getElementById("new-book")