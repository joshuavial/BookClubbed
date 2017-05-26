import React from 'react'
import * as api from '../api'

import {HashRouter as Router, Route} from 'react-router-dom'

import BookList from './BookList'
import Book from './Book'

export default class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      books: []
    }
  }

  componentDidMount() {
    api.getBooks((books) => this.setState({books}))
  }

  getBook(id) {
    return this.state.books.find(b => b.id == id)
  }

  render() {
    return (
      <Router>
        <div>
          <h1>Book Clubbed!</h1>
          <Route exact={true} path='/' component={() => <BookList books={this.state.books} />} />
          <Route path='/book/:id' component={(props) => <Book getBook={this.getBook.bind(this)} book_id={props.match.params.id} />} />

        </div>
      </Router>
    )
  }
}
