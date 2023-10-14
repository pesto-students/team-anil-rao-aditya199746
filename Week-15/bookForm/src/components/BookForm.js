import React, { useState } from "react";
import "./BookForm.css";

function BookForm({ addBook }) {
  const [bookData, setBookData] = useState({ title: "", author: "", year: "" });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBookData({ ...bookData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addBook(bookData);
    setBookData({ title: "", author: "", year: "" });
  };

  return (
    <div className="book-form">
      <h2>Add a New Book</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          value={bookData.title}
          onChange={handleInputChange}
          placeholder="Title"
        />
        <input
          type="text"
          name="author"
          value={bookData.author}
          onChange={handleInputChange}
          placeholder="Author"
        />
        <input
          type="text"
          name="year"
          value={bookData.year}
          onChange={handleInputChange}
          placeholder="Year"
        />
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
}

export default BookForm;
