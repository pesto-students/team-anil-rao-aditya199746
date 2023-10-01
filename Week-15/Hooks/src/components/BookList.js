import React from "react";
import BookItem from "./BookItem";
import useBookFilter from "./useBookFilter";
import useBookSorter from "./useBookSorter";

function BookList({ books, searchTerm, sortBy }) {
  const filteredBooks = useBookFilter(books, searchTerm);
  const sortedBooks = useBookSorter(filteredBooks, sortBy);

  return (
    <div>
      <h1>Book List</h1>
      <ul>
        {sortedBooks.map((book, index) => (
          <BookItem key={index} book={book} />
        ))}
      </ul>
    </div>
  );
}

export default BookList;
