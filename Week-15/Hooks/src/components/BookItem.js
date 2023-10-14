import React from "react";

function BookItem({ book }) {
  return (
    <li>
      <strong>Title:</strong> {book.title}
      <br />
      <strong>Author:</strong> {book.author}
      <br />
      <strong>Year:</strong> {book.year}
    </li>
  );
}

export default BookItem;
