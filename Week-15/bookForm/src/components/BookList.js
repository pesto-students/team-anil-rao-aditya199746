import React, { useState } from "react";
import BookForm from "./BookForm";
import BookDetail from "./BookDetail";
import "./BookList.css";

function BookList() {
  const [books, setBooks] = useState([]);

  const addBook = (newBook) => {
    setBooks([...books, newBook]);
  };

  const deleteBook = (index) => {
    const updatedBooks = [...books];
    updatedBooks.splice(index, 1);
    setBooks(updatedBooks);
  };

  return (
    <div className="book-list">
      <h1>Book List</h1>
      <BookForm addBook={addBook} />
      {books.length === 0 ? (
        <p>The book list is currently empty.</p>
      ) : (
        books.map((book, index) => (
          <div className="book-item" key={index}>
            <p>{book.title}</p>
            <p>{book.author}</p>
            <p>{book.year}</p>
            <button onClick={() => deleteBook(index)} className="delete-button">
              Delete
            </button>
            <BookDetail book={book} />
          </div>
        ))
      )}
    </div>
  );
}

export default BookList;
