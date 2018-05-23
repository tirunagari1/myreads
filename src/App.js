import React from 'react'
import { Route, Link } from 'react-router-dom'
import ListBooks from './ListBook';
import SearchBooks from './SearchBooks';
import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends React.Component {
  state = {
    books: []
  };

changeStore = (e,_Book)=>{
  const books = this.state.books;
  const store = e.target.value;
  _Book.store = e.target.value;
  this.setState ({
    books
  });


}

  render() {
    return (
      <div className="app">
        <Route exact path='/' render={() => (
          <ListBooks
            books={this.state.books}
            changeShelf={this.changeShelf}
          />
        )}
        />
        <Route path='/search' render={({ history }) => (
          <SearchBooks
            books={this.state.books}
            changeShelf={this.changeShelf}
          />
        )}
        />

      </div>
    )
  }
}
export default BooksApp;