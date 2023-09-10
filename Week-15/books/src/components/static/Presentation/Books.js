import React from 'react'
import List from '../RenderLists/List'
import classes from "./styles.module.scss"
import { bookList } from '../utils/books.const';

const Books = () => {
  return (
    <ul className={classes.listContainer}>{
      bookList.map((book)=>{
          return <li className={classes.list}>
           <List book={book} />
           </li>
        })
    }</ul>
  )
}

export default Books