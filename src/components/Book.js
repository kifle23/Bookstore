import React from 'react';
import './Book.css';
import BookRecord from './BookRecord';

function Book() {
  const books = [
    {
      id: 1,
      type: 'action',
      title: 'The Hunger Games',
      author: 'Suzanne Collins',
    },
    {
      id: 2,
      type: 'action',
      title: 'Dune',
      author: 'Frank Herbert',
    },
    {
      id: 3,
      type: 'action',
      title: 'Capital in the Twenty-First Century',
      author: 'Suzanne Collins',
    },
  ];
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
              />
            ))}
          </div>
        </div>
      </section>
      <hr />
      <h2>ADD NEW BOOK</h2>
      <form action="">
        <div className="formcontrol">
          <input
            type="text"
            className="input-text"
            placeholder="Add title"
            name="title"
          />
          <input
            type="text"
            className="input-text"
            placeholder="Add author"
            name="author"
          />
        </div>
      </form>
    </>
  );
}

export default Book;
