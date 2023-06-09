import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Book from './components/Book';
import Nav from './components/Nav';
import Categories from './components/Categories';
import './App.css';

function App() {
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
