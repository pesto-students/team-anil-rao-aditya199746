import React, { useState } from "react";
import "./styles.css";
import BookList from "../src/components/BookList";
import BookDataLoader from "../src/components/BookDataLoader";
import ThemeSwitcher from "../src/components/ThemeSwitcher";
import { ThemeProvider } from "../src/components/ThemeContext";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("title");
  const [books, setBooks] = useState([]);

  return (
    <ThemeProvider>
      <div className="App">
        <ThemeSwitcher />
        <input
          type="text"
          placeholder="Search books"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="title">Sort by Title</option>
          <option value="author">Sort by Author</option>
          <option value="year">Sort by Year</option>
        </select>
        <BookDataLoader setBooks={setBooks} />
        <BookList searchTerm={searchTerm} sortBy={sortBy} books={books} />
      </div>
    </ThemeProvider>
  );
}

export default App;
