const body = document.body;
const content = document.getElementById('content');

let myLibrary = [];

function removeElementsByClass(className){
    const elements = document.getElementsByClassName(className);
    while(elements.length > 0){
        elements[0].parentNode.removeChild(elements[0]);
    }
}

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        return `${title} by ${author}, ${pages} pages, ${read}.`;
    }
};

function makeBookCard() {
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
        let bookCardRead = document.createElement('div');
        bookCardRead.textContent = `${book.read}`;
        bookCard.append(bookCardRead);
        // bookCard.textContent = `${book.title} by ${book.author}, ${book.pages}, ${book.read}.`;
    })
}  

const newBookBtn = document.getElementById('addBook');
const newBookDialog = document.getElementById('newBookDialog');
const confirmBtn = document.getElementById('confirmBtn');
const BookName = document.getElementById('BookName');
const Author = document.getElementById('Author');
const Pages = document.getElementById('Pages');
const ReadStatus = document.getElementById('ReadStatus');

newBookBtn.addEventListener('click', function onOpen() {
    if (typeof newBookDialog.showModal === "function") {
        newBookDialog.showModal();
    } else {
      outputBox.value = "Sorry, the <dialog> API is not supported by this browser.";
    }
});

confirmBtn.addEventListener('click', function onClose() {
    const newBook = new Book(BookName.value, Author.value, Pages.value, ReadStatus.value);
    myLibrary.push(newBook);
    makeBookCard();
  });


