import React from 'react'

import {Link} from 'react-router-dom'

export default (props) => {
  return (
    <div className='column bookList'>
      {props.books.map((book) => {
        return (
          <div key={book.id} className="four columns">
            <Link to={'/book/' + book.id}>
              <img src={book.image}/>
            </Link>
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
