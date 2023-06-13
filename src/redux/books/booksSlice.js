import { v4 as uuidv4 } from 'uuid';

const initialState = [
  {
    id: uuidv4(),
    type: 'action',
    title: 'The Hunger Games',
    author: 'Suzanne Collins',
  },
  {
    id: uuidv4(),
    type: 'action',
    title: 'Dune',
    author: 'Frank Herbert',
  },
  {
    id: uuidv4(),
    type: 'action',
    title: 'Capital in the Twenty-First Century',
    author: 'Suzanne Collins',
  },
];

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
