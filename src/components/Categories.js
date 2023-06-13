import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleStatus } from '../redux/categories/categoriesSlice';

function Categories() {
  const dispatch = useDispatch();
  const status = useSelector((state) => state.categories.status);
  return (
    <button
      id="catButton"
      type="button"
      onClick={() => dispatch(toggleStatus())}
    >
      <p>{status}</p>
    </button>
  );
}

export default Categories;
