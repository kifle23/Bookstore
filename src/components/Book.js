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
  const [category, setcategory] = useState('Fiction');

  const backGround = {
    backgroundImage:
      'radial-gradient(circle closest-side, white 79%, transparent 80% 100%), conic-gradient(at 50% 50%, #379cf6 65%, rgb(226, 226, 226) 0)',
  };

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
        <div className="container-main">
          {Object.entries(books).map(([id, book]) => book.map((bookList) => (
            <div className="content" key={id}>
              <div className="aside">
                <div className="aside-left">
                  <div className="cat">{bookList.category}</div>
                  <div className="title">{bookList.title}</div>
                  <div className="author">{bookList.author}</div>
                  <button type="button">Comments</button>
                  <button
                    type="button"
                    className="remove-btn"
                    onClick={() => {
                      dispatch(removeBook(id));
                    }}
                  >
                    Remove
                  </button>
                  <button type="button">Edit</button>
                </div>
                <div className="aside-center">
                  <div className="percent">
                    <div className="loader" style={backGround}>
                      <div className="box"> </div>
                    </div>
                    <div>
                      <span className="percent-value">64%</span>
                      <span className="percent-status">Completed</span>
                    </div>
                  </div>
                </div>
                <div className="aside-right">
                  <p className="current-chapter">CURRENT CHAPTER</p>
                  <span className="chapter">Chapter 17</span>
                  <button type="button">UPDATE PROGRESS</button>
                </div>
              </div>
            </div>
          )))}
        </div>
      </section>
      <hr />
      <div className="container">
        <h2 className="addhead">ADD NEW BOOK</h2>
        <div>
          <form id="addBook" action="">
            <div className="formcontrol">
              <input
                type="text"
                className="input-text"
                placeholder="Add title"
                style={{ flex: 4 }}
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
                style={{ flex: 3 }}
                name="author"
                value={author}
                onChange={(e) => {
                  setAuthor(e.target.value);
                }}
              />
              <select
                className="input-select"
                value={category}
                style={{ flex: 2 }}
                onChange={(e) => setcategory(e.target.value)}
              >
                <option value="fiction">Fiction</option>
                <option value="sci-fi">Sci-fi</option>
                <option value="adventure">Adventure</option>
              </select>
              <button style={{ flex: 1 }} type="button" onClick={handleAddBook}>
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
