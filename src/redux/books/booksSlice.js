const initialState = [];

const ADD_BOOK = 'ADD_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';

export default function booksReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.payload.id);
    default:
      return state;
  }
}

export const addBook = (book) => ({ type: ADD_BOOK, payload: book });
export const removeBook = (book) => ({ type: REMOVE_BOOK, payload: book });
