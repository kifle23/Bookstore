import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
  reducer: {
    books: [],
    categories: [],
  },
});
export default store;
