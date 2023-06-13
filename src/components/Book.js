import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/booksSlice';
import './Book.css';
import BookRecord from './BookRecord';

function Book() {
  const books = useSelector((state) => state.books || []);
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [type] = useState('action');
  return (
    <>
      <section className="section">
        <div className="container">
          <div>
            {books.map((book) => (
              <BookRecord
                type={book.type}
                title={book.title}
                author={book.author}
                key={book.id}
                id={book.id}
              />
            ))}
          </div>
        </div>
      </section>
      <hr />
      <div className="container">
        <h2>ADD NEW BOOK</h2>
        <div className="nav">
          <form id="addBook" action="">
            <div className="formcontrol">
              <input
                type="text"
                className="input-text"
                placeholder="Add title"
                name="title"
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
              />
              <input
                type="text"
                className="input-text"
                placeholder="Add author"
                name="author"
                onChange={(e) => {
                  setAuthor(e.target.value);
                }}
              />
              <button
                type="button"
                onClick={() => {
                  dispatch(
                    addBook({
                      id: uuidv4(),
                      type,
                      title,
                      author,
                    }),
                  );
                  setTitle('');
                  setAuthor('');
                  document.getElementById('addBook').reset();
                }}
              >
                Add
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Book;
