import React from 'react'
import {Link} from 'react-router-dom'

export default class Book extends React.Component {
  render () {
    let book = this.props.getBook(this.props.book_id) || {}
    return (
      <div className='book'>I'm a Book
      <Link to='/'>View all books</Link>
      {book.title} 
      </div>
    )
  }
}
