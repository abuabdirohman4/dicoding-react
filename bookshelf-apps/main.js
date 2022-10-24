books = [];
const RENDER_BOOK = "render-book";

const generateBook = (id, title, author, year, isComplete) => {
  return {
    id, // string | number,
    title, // string,
    author, // string,
    year, // number,
    isComplete, // boolean,
  };
};

const addBook = () => {
  const id = +new Date();
  const title = document.getElementById("inputBookTitle").value;
  const author = document.getElementById("inputBookAuthor").value;
  const year = document.getElementById("inputBookYear").value;
  const isComplete = document.getElementById("inputBookIsComplete").checked;
  const book = generateBook(id, title, author, year, isComplete);
  books.push(book);

  document.dispatchEvent(new Event(RENDER_BOOK));
  saveBook();
};

const makeBook = (book) => {
  const { id, title, author, year, isComplete } = book;

  const textTitle = document.createElement("h3");
  textTitle.innerText = title;
  const textAuthor = document.createElement("p");
  textAuthor.innerText = author;
  const textYear = document.createElement("p");
  textYear.innerText = year;

  const action = document.createElement("div");
  action.classList.add("action");
  const deleteButton = document.createElement("button");
  deleteButton.classList.add("red");
  deleteButton.innerText = "Hapus buku";
  deleteButton.addEventListener("click", function () {
    handleDeleteBook(id);
  });
  const actionButton = document.createElement("button");
  actionButton.classList.add("green");

  const article = document.createElement("article");
  article.classList.add("book_item");
  article.setAttribute("id", `book-${id}`);
  article.append(textTitle, textAuthor, textYear, action);

  if (isComplete) {
    actionButton.innerText = "Belum selesai dibaca";
    actionButton.addEventListener("click", function () {
      handleStatusBook(id);
    });

    action.append(actionButton, deleteButton);
  } else {
    actionButton.innerText = "Selesai dibaca";
    actionButton.addEventListener("click", function () {
      handleStatusBook(id);
    });

    action.append(actionButton, deleteButton);
  }
  return article;
};

const findBook = (bookId, index) => {
  if (!index) {
    for (const book of books) {
      if (book.id === bookId) {
        return book;
      }
    }
  } else {
    for (const index in books) {
      if (books[index].id == bookId) {
        return index;
      }
    }
  }
  return null;
};

const handleStatusBook = (bookId) => {
  const book = findBook(bookId);
  if (book === null) return;

  if (book.isComplete == true) {
    book.isComplete = false;
  } else {
    book.isComplete = true;
  }
  document.dispatchEvent(new Event(RENDER_BOOK));
  saveBook();
};

const handleDeleteBook = (bookId) => {
  const confirmAction = confirm("Apakah kamu yakin akan menghapus ini?");

  if (confirmAction) {
    const bookIndex = findBook(bookId, true);

    if (bookIndex === null) return;

    books.splice(bookIndex, 1);
    document.dispatchEvent(new Event(RENDER_BOOK));
    saveBook();
  }
};

const handleSearchBook = () => {
  let article = document.querySelectorAll(".book_item");
  let keyword = document.getElementById("searchBookTitle").value;

  for (let i = 0; i < article.length; i++) {
    if (
      article[i].textContent.toLowerCase().includes(keyword.toLowerCase())
    ) {
      article[i].classList.remove("is-hidden");
    } else {
      article[i].classList.add("is-hidden");
    }
  }
};

const saveBook = () => {
  if (typeof Storage !== undefined) {
    const parsedBooks = JSON.stringify(books);
    localStorage.setItem("bookshelf", parsedBooks);
  }
};

function loadBook() {
  let bookshelf = JSON.parse(localStorage.getItem("bookshelf"));
  if (bookshelf !== null) {
    for (const book of bookshelf) {
      books.push(book);
    }
  }
  document.dispatchEvent(new Event(RENDER_BOOK));
}

document.addEventListener(RENDER_BOOK, function () {
  const incompleteBookshelfList = document.getElementById(
    "incompleteBookshelfList"
  );
  const completeBookshelfList = document.getElementById(
    "completeBookshelfList"
  );

  incompleteBookshelfList.innerHTML = "";
  completeBookshelfList.innerHTML = "";

  for (const book of books) {
    const bookElement = makeBook(book);
    if (book.isComplete) {
      completeBookshelfList.append(bookElement);
    } else {
      incompleteBookshelfList.append(bookElement);
    }
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const submitForm = document.getElementById("inputBook");
  const submitSearch = document.getElementById("searchBook");

  submitForm.addEventListener("submit", (event) => {
    event.preventDefault();
    addBook();
  });

  submitSearch.addEventListener("submit", (event) => {
    event.preventDefault();
    handleSearchBook();
  });

  if (typeof Storage !== undefined) {
    loadBook();
  }
});
