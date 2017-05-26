import React from 'react'

export default (props) => {
  return (
    <div className='column bookList'>
      {props.books.map((book) => {
        return (
          <div key={book.id} className="four columns">
            <img src={book.image}/>
            <h3>{book.title}</h3>
            <li>{book.author}</li>
            <li>{book.genre}</li>
            <li>{book.rating}</li>
          </div>
        )
      })}
    </div>
  )
}
