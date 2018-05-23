import React, { Component } from "react";

class Book extends Component {
    render() {
        const { filteredBooks } = this.props;
        return (
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {filteredBooks.length > 0 && filteredBooks.map(filteredBook => (
                        <li key={filteredBook.id}>
                            <div className="book">
                                <div className="book-top">
                                    <div className="book-cover" style={{
                                        width: 128, height: 192,
                                        backgroundImage: 'url("http://books.google.com/books/content?id=32haAAAAMAAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72yckZ5f5bDFVIf7BGPbjA0KYYtlQ__nWB-hI_YZmZ-fScYwFy4O_fWOcPwf-pgv3pPQNJP_sT5J_xOUciD8WaKmevh1rUR-1jk7g1aCD_KeJaOpjVu0cm_11BBIUXdxbFkVMdi&source=gbs_api")'
                                    }}>
                                    </div>
                                    <div className="book-shelf-changer">
                                        <select name='shelf' onChange={e => this.props.changeStore(e, filteredBook)}
                                            value={filteredBook.store} >
                                            <option value="none" disabled>Move to...</option>
                                            <option value="currentlyReading">Currently Reading</option>
                                            <option value="wantToRead">Want to Read</option>
                                            <option value="read">Read</option>
                                            <option value="none">None</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="book-title">{filteredBook.title}</div>
                                <div className="book-authors">{filteredBook.authors ? filteredBook.authors.join(",") : ""}</div>
                            </div>
                        </li>
                    ))}
                </ol>
            </div>);
    }
}


export default Book;