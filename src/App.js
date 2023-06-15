import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Book from './components/Book';
import Nav from './components/Nav';
import Categories from './components/Categories';
import './App.css';
import { fetchBooks } from './redux/books/booksSlice';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);
  return (
    <>
      <BrowserRouter>
        <Nav />
        <div className="app">
          <Routes>
            <Route index element={<Book />} />
            <Route path="book" element={<Book />} />
            <Route path="categories" element={<Categories />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
