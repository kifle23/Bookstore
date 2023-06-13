import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: [],
  status: 'Under construction',
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    toggleStatus: (state) => {
      state.status = 'Under construction';
    },
  },
});

export const toggleStatus = categoriesSlice.actions;
export default categoriesSlice.reducer;
