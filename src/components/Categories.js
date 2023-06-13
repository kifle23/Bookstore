import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import categories from '../redux/categories/categoriesSlice';

function Categories() {
  const dispatch = useDispatch();
  const status = useSelector((state) => state.Categories);
  return (
    <button id="catButton" type="button" onClick={() => dispatch(categories())}>
      <p>{status}</p>
    </button>
  );
}

export default Categories;
