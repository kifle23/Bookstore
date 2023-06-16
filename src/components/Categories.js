import React from 'react';
import { useSelector } from 'react-redux';

function Categories() {
  const status = useSelector((state) => state.categories.status);
  return (
    <div style={{ textAlign: 'center', marginTop: '2rem' }}>
      <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>
        {' '}
        {status}
        {' '}
      </h2>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100"
        height="100"
        viewBox="0 0 24 24"
      >
        <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8z" />
      </svg>
      <p style={{ fontSize: '1.2rem', color: '#777', lineHeight: '1.5' }}>
        Sorry, this page is currently under construction. Please check back
        later.
      </p>
    </div>
  );
}

export default Categories;
