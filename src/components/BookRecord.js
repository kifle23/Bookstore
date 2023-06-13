import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import './BookRecord.css';
import { removeBook } from '../redux/books/booksSlice';

function BookRecord({
  id, type, title, author,
}) {
  const dispatch = useDispatch();
  return (
    <>
      <div className="content">
        <div className="aside">
          <div className="aside_left">
            <div>{type}</div>
            <div>{title}</div>
            <div>{author}</div>
            <button type="button">Comments</button>
            <button type="button" onClick={() => dispatch(removeBook({ id }))}>
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
    </>
  );
}

BookRecord.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};
export default BookRecord;
