import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/6Ltjosiv6WjHE3FmYtmN/books/';

export const fetchBooks = createAsyncThunk(
  'books/fetchBooks',
  async (_, thunkCB) => {
    try {
      // const response = await axios.get(url);
      // const { data } = response;
      // const books = Object.values(data);
      // return books;
      const response = await axios(url);
      return response.data;
    } catch (err) {
      return thunkCB.rejectWithValue(
        'An error occurred while fetching the data',
      );
    }
  },
);

export const addBook = createAsyncThunk(
  'books/addBook',
  async (book, thunkCB) => {
    try {
      const response = await axios.post(url, book, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response.status === 201) {
        thunkCB.dispatch(fetchBooks());
        return null;
      }
      return null;
    } catch (err) {
      return thunkCB.rejectWithValue('Failed to add book');
    }
  },
);

export const removeBook = createAsyncThunk(
  'books/removeBook',
  async (id, thunkCB) => {
    try {
      const response = await axios.delete(`${url}${id}`);

      if (response.status === 201) {
        thunkCB.dispatch(fetchBooks());
        return null;
      }
      return null;
    } catch (err) {
      return thunkCB.rejectWithValue('Failed to delete the book');
    }
  },
);

const initialState = {
  books: [],
  isLoading: false,
  errorMsg: false,
  postMsg: false,
  deleteMsg: false,
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooks.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchBooks.fulfilled, (state, action) => {
        state.isLoading = false;
        state.books = action.payload;
      })
      .addCase(fetchBooks.rejected, (state) => {
        state.isLoading = false;
        state.errorMsg = true;
      })
      .addCase(addBook.pending, (state) => {
        state.postMsg = true;
      })
      .addCase(addBook.fulfilled, (state, action) => {
        state.postMsg = false;
        state.books = action.payload;
      })
      .addCase(addBook.rejected, (state) => {
        state.postMsg = false;
      })
      .addCase(removeBook.pending, (state) => {
        state.deleteMsg = true;
      })
      .addCase(removeBook.fulfilled, (state, action) => {
        state.deleteMsg = false;
        state.books = action.payload;
      })
      .addCase(removeBook.rejected, (state) => {
        state.deleteMsg = false;
      });
  },
});

export default booksSlice.reducer;
