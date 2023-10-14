import React from 'react'

const List = (props) => {
  return (
    <div>
        <h3>{props.book.title}</h3>
        <p>Author: {props.book.author}</p>
        <p>Year: {props.book.year}</p>
    </div>
  )
}

export default List