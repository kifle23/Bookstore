import { v4 as uuidv4 } from 'uuid';

const initialState = {
  books: [],
};

const ADD_BOOK = 'ADD_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';
let newBook;

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      newBook = {
        id: uuidv4(),
        title: action.payload.title,
        author: action.payload.author,
      };
      return {
        ...state,
        books: [...state.books, newBook],
      };
    case REMOVE_BOOK:
      return {
        ...state,
        books: state.books.filter((book) => book.id !== action.payload.id),
      };
    default:
      return state;
  }
};

const addBook = (book) => ({ type: ADD_BOOK, payload: book });
const removeBook = (book) => ({ type: REMOVE_BOOK, payload: book });

export { booksReducer, addBook, removeBook };
