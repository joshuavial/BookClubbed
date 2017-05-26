import React from 'react'
import * as api from '../api'

import BookList from './BookList'

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

  render() {
    return (
      <div>
        <h1>Book Clubbed!</h1>
        <BookList books={this.state.books} />
      </div>
    )
  }
}
