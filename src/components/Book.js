import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook, removeBook } from '../redux/books/booksSlice';
import './BookRecord.css';

function Book() {
  const { books, isLoading, errorMsg } = useSelector(
    (state) => state.books || [],
  );
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category] = useState('Action');

  if (isLoading) {
    return <div style={{ marginTop: '50px' }}>Loading...</div>;
  }

  if (errorMsg) {
    return <div style={{ marginTop: '50px' }}>Failed to fetch</div>;
  }

  const handleAddBook = async () => {
    if (author !== '' && title !== '') {
      dispatch(
        addBook({
          item_id: uuidv4(),
          title,
          author,
          category,
        }),
      )
        .unwrap()
        .then(() => {
          setTitle('');
          setAuthor('');
        });
    }
  };

  return (
    <>
      <section className="section">
        <div className="container">
          {Object.entries(books).map(([id, book]) => book.map((bookList) => (
            <div className="content" key={id}>
              <div className="aside">
                <div className="aside_left">
                  <div>{bookList.category}</div>
                  <div>{bookList.title}</div>
                  <div>{bookList.author}</div>
                  <button type="button">Comments</button>
                  <button
                    type="button"
                    onClick={() => {
                      dispatch(removeBook(id));
                    }}
                  >
                    Remove
                  </button>
                  <button type="button">Edit</button>
                </div>
                <div className="aside_center">
                  <div className="percent">
                    <div className="loader">
                      <div className="box">Progress Graph</div>
                    </div>
                    <div className="">
                      <span id="percent_value">64%</span>
                      <span id="percent_status">Completed</span>
                    </div>
                  </div>
                </div>
                <div className="aside_right">
                  <p>CURRENT CHAPTER</p>
                  <span>Chapter 17</span>
                  <button type="button">UPDATE PROGRESS</button>
                </div>
              </div>
            </div>
          )))}
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
                value={title}
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
              />
              <input
                type="text"
                className="input-text"
                placeholder="Add author"
                name="author"
                value={author}
                onChange={(e) => {
                  setAuthor(e.target.value);
                }}
              />
              <button type="button" onClick={handleAddBook}>
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
