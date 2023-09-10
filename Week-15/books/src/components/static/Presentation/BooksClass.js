import React, { Component } from 'react';
import ListClass from '../RenderLists/ListClass';
import WithLogging from '../HOC/withLogging'; // Import the HOC
import { bookList } from '../utils/books.const';
import classes from "./styles.module.scss"

class BooksClass extends Component {
  render() {

    return (
      <div>
        <h1>Book List</h1>
        <ul className={classes.listContainer}>
          {bookList.map((book, index) => (
            <li key={index} className={classes.list}>
              <ListClass book={book} />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default WithLogging(BooksClass);