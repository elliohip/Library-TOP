const BOOK_SHELF = document.getElementById("books");


document.getElementById("add-book-button");

let number_of_books = 0;

let library = [];

/**
 * 
 * @param {String} t title
 * @param {String} a author
 */
function Book(t, a, r, identity) {
    this.title = t;
    this.author = a;
    this.read = r;
    this.id = identity;

    makeBookCard(this);

}

Book.prototype.change_read = function() {
    if (this.read == true) {
        this.read = false;
    }
    else {
        this.read = true;
    }
};

/*
/ onclick for the submit button

STILL NEEDS WORK: 
need to add read functionality
*/
function submitBook(event) {

    

    let t = document.getElementById("title-in").value
    let a = document.getElementById("author-in").value;

    let book = new Book(t, a, true, "id" + number_of_books);

    // makeBookCard(book);

    event.preventDefault();
}



document.getElementById("add-book-button").addEventListener('click', submitBook);




/**
 * 
 * @param {Book} b book to make into a card
 */
function makeBookCard(b) {
    // make root card
    let root = document.createElement('div');
    
    // set the state
    root.id = "" + number_of_books;
    number_of_books++;
    root.style.backgroundColor = "brown";
    root.style.borderColor = "black";
    root.style.borderStyle = "solid";
    root.style.borderWidth = "1px";
    root.style.minHeight = "145px";

    root.book = b;
    
    // append the element
    document.getElementById('books').appendChild(root);

    // make inner text shape
    let title_shape = document.createElement('div');

    title_shape.innerHTML = "Title: " + b.title;

    document.getElementById(root.id).appendChild(title_shape);

    let author_shape = document.createElement('div');

    author_shape.innerHTML = "Author: " + b.author;

    document.getElementById(root.id).appendChild(author_shape);

    let read_shape = document.createElement('div');

    read_shape.innerHTML = checkRead(b);
    
    document.getElementById(root.id).appendChild(read_shape);

    let deleteButton = document.createElement("button");

    deleteButton.innerHTML = "delete";
    deleteButton.addEventListener("click", deleteCard);

    document.getElementById(root.id).appendChild(deleteButton);

    



    // reset variables


    root = undefined;
    
    

}

function deleteCard(event) {

    event.target.parentNode.parentNode.removeChild(event.target.parentNode);
}





/**
 * 
 * @param {Book} b book object
 */
function addBookToLibrary(b) {
    

    
    BOOK_SHELF.appendChild()
};

/**
 * 
 * @param {Book} b bok to check 
 * @returns String for if read or not
 */
function checkRead(b) {
    if (b.read == false) {
        return "not read";
    }
    else {
        return "read";
    }
}