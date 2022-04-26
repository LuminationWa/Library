const body = document.body;
const content = document.getElementById('content');

let myLibrary = [];

// Used to refresh displayed books
function removeElementsByClass(className){
    const elements = document.getElementsByClassName(className);
    while(elements.length > 0){
        elements[0].parentNode.removeChild(elements[0]);
    }
}

// function Book(title, author, pages, readStatus) {
//     this.title = title;
//     this.author = author;
//     this.pages = pages;
//     readStatus === true ? this.read = 'Read' : this.read = 'Not read yet';
//     this.info = function() {
//         return `${title} by ${author}, ${pages} pages, ${read}.`;
//     }
// };

class Book {
    constructor(title, author, pages, readStatus) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        readStatus === true ? this.read = 'Read' : this.read = 'Not read yet';
    }
    info() {
        return `${title} by ${author}, ${pages} pages, ${read}.`;
    }
}

function makeBookCard() {
    // Resets displayed books and then makes a bookcard for each one
    removeElementsByClass('book-card');
    myLibrary.forEach(book => {
        let bookCard = document.createElement('div');
        bookCard.classList.add('book-card');
        content.append(bookCard);
        let bookCardTitle = document.createElement('div');
        bookCardTitle.classList.add('bookCardTitle');
        bookCardTitle.textContent = `${book.title}`;
        bookCard.append(bookCardTitle);
        let bookCardAuthor = document.createElement('div');
        bookCardAuthor.textContent = `by ${book.author}`;
        bookCard.append(bookCardAuthor);
        let bookCardPages = document.createElement('div');
        bookCardPages.textContent = `${book.pages} pages`;
        bookCard.append(bookCardPages);
        let bookCardRead = document.createElement('button');
        bookCardRead.textContent = `${book.read}`;
        bookCardRead.classList.add('status-button');
        bookCardRead.addEventListener('click', function() {
            this.textContent === 'Read' ? this.textContent = 'Not read yet' : this.textContent = 'Read';
        });
        bookCard.append(bookCardRead);
        let bookCardDelete = document.createElement('button');
        bookCardDelete.textContent = `Delete`;
        bookCardDelete.addEventListener('click', function() {
            // Removes current book from the array using its index and then removes the bookcard
            myLibrary.splice(myLibrary.indexOf(book), 1);
            bookCard.remove();
        });
        bookCardDelete.classList.add('delete-button');
        bookCard.append(bookCardDelete);
        // bookCard.textContent = `${book.title} by ${book.author}, ${book.pages}, ${book.read}.`;
    })
}  

// Elements
const newBookBtn = document.getElementById('addBook');
const newBookDialog = document.getElementById('newBookDialog');
const confirmBtn = document.getElementById('confirmBtn');
const BookName = document.getElementById('BookName');
const Author = document.getElementById('Author');
const Pages = document.getElementById('Pages');
const ReadStatus = document.getElementById('ReadStatus');

// Opens dialog
newBookBtn.addEventListener('click', function onOpen() {
    if (typeof newBookDialog.showModal === "function") {
        newBookDialog.showModal();
    } else {
      outputBox.value = "Sorry, the <dialog> API is not supported by this browser.";
    }
});

// When dialog closes makes a new book using its values
confirmBtn.addEventListener('click', function onClose() {
    const newBook = new Book(BookName.value, Author.value, Pages.value, ReadStatus.checked);
    myLibrary.push(newBook);
    makeBookCard();
  });


