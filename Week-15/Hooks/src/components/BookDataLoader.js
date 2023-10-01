import React, { useEffect } from "react";

function BookDataLoader({ setBooks }) {
  useEffect(() => {
    // Simulate fetching initial book data
    const initialBooks = [
      { title: "Book 1", author: "Author 1", year: 2020 },
      { title: "Book 2", author: "Author 2", year: 2019 },
      { title: "Book 4", author: "Author 3", year: 2021 },
      { title: "Book 3", author: "Author 4", year: 2022 }
      // Add more initial book data as needed
    ];
    setBooks(initialBooks);
  }, [setBooks]);
  return null; // This component doesn't render anything
}

export default BookDataLoader;
