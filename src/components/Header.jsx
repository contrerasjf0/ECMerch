import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
import '../styles/components/Header.css';

const Header = () => {
  return (
    <div className="Header">
      <h1 className="Header-title">
        <Link to="/">EC Merch</Link>
      </h1>
      <div className="Header-checkout">
        <Link to="/checkout">
          <FontAwesomeIcon icon={faShoppingBasket} />
        </Link>
      </div>
    </div>
  );
}

export default Header;

