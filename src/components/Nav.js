import React from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

function Nav() {
  return (
    <>
      <nav>
        <div className="container">
          <div className="nav">
            <div className="nav-brand">
              <NavLink to="/book">Bookstore CMS</NavLink>
            </div>
            <ul className="nav-ul">
              <li>
                <NavLink to="/book">Book</NavLink>
              </li>
              <li>
                <NavLink to="/categories">Categories</NavLink>
              </li>
            </ul>
            <div className="nav-user">
              <span id="user">
                <FontAwesomeIcon icon={faUser} />
              </span>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Nav;
