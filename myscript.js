const myLibrary = [
    {
     title: "Harry Potter",
     author: "JK Rowling",
     pages: 400, 
     read: "Read", 
    },
    {
        title: "Harry Potter",
        author: "JK Rowling",
        pages: 400, 
        read: "Read", 
       }
];

function Book(title, author, pages, read) {
    this.title = title; // String
    this.author = author; // String
    this.pages = pages; // int
    this.read = read; // boolean
}

function addBookToLibrary(book) {
    myLibrary.push(book);
}

bookContainer = document.getElementById("bookContainer");

function displayAllBook() {
    myLibrary.forEach((item)=>{
        div = document.createElement("div");
        div.className = "card"; 
        div.setAttribute("style", "margin: 20px;");
        ul = document.createElement("ul");
        title = document.createElement("li");
        title.textContent = `"${item.title}"`;
        author= document.createElement("li");
        author.textContent = `By ${item.author}`;
        pages = document.createElement("li");
        pages.textContent = `${item.pages} Pages`
        read = document.createElement("button");
        read.className = "read";
        read.textContent = `${item.read}`
        ul.appendChild(title);
        ul.append(author);
        ul.appendChild(pages);
        ul.appendChild(read);
        div.appendChild(ul)
        bookContainer.appendChild(div);
    })
}

displayAllBook();

dialog = document.querySelector("dialog")

addBookButton = document.getElementById("addBookButton");
addBookButton.addEventListener("click", ()=> {
    dialog.showModal();
})
