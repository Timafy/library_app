// stores books
const myLibrary = [
    {
     title: "Harry Potter",
     author: "JK Rowling",
     pages: 400, 
     read: false, 
    },
    {
    title: "Harry Potter",
    author: "JK Rowling",
    pages: 400, 
    read: false, 
    }
];

function Book(title, author, pages, read, index) {
    this.title = title; // String
    this.author = author; // String
    this.pages = pages; // int
    this.read = read; // boolean
    this.index = index;
}

Book.prototype.addBookToLibrary = function() {
    myLibrary.push(this);
};

function removeBook(index) {
    myLibrary.splice(index, 1);

}

function resetIndex() {
    myLibrary.forEach(function(item, index) {
        item.index = index;
    });
};

bookContainer = document.getElementById("bookContainer");

function displayAllBook() {
 
    while (bookContainer.firstChild) {
        bookContainer.removeChild(bookContainer.firstChild);
    };

    myLibrary.forEach((item)=>{
        let div = document.createElement("div");
        div.className = "card"; 
        let ul = document.createElement("ul");
        let title = document.createElement("li");
        title.textContent = `"${item.title}"`;
        let author= document.createElement("li");
        author.textContent = `By ${item.author}`;
        let pages = document.createElement("li");
        pages.textContent = `${item.pages} Pages`
        let read = document.createElement("button");
        if (item.read) {
            read.className = "read";
               read.textContent = "Read"
        }
        else {
            read.className = "notRead"
            read.textContent = "Not Read"
        }

        read.addEventListener("click", ()=>{
            if (item.read) {
                item.read = false;
                read.textContent = "Not Read";
                read.style.backgroundColor = "rgb(255, 128, 128)";
            }
            else {
                item.read = true;
                read.textContent = "Read";
                read.style.backgroundColor = "rgb(211, 255, 161)";
            };
        }); 

        let remove = document.createElement("button");
        remove.className = "remove"
        remove.textContent = "Remove"

        remove.addEventListener("click", ()=>{
            removeBook(item.index);
            resetIndex();
            displayAllBook();
        })

        ul.appendChild(title);
        ul.append(author);
        ul.appendChild(pages);
        ul.appendChild(read);
        ul.appendChild(remove)
        div.appendChild(ul)
        bookContainer.appendChild(div);
    })
}

displayAllBook();

dialog = document.querySelector("dialog")
form = document.querySelector("form")

addBookButton = document.getElementById("addBookButton");
addBookButton.addEventListener("click", ()=> {
    dialog.showModal();
})

submitButton = document.getElementById("submitButton");
submitButton.addEventListener("click", (event)=>{
    event.preventDefault();
    let title = document.getElementById("title");
    let author = document.getElementById("author");
    let pages = document.getElementById("pages");
    let read = document.getElementById("read");
    let newBook;
    if (read.checked) {
        newBook =  new Book(title.value, author.value, pages.value, true, myLibrary.length);
    }
    else {
        newBook =  new Book(title.value, author.value, pages.value, false, myLibrary.length);
    };
    newBook.addBookToLibrary();
    displayAllBook();
    form.reset();
    dialog.close();
});



 