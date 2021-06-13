import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
import AppContext from '../context/AppContex';
import '../styles/components/Header.css';

const Header = () => {
  
  const { state } = useContext(AppContext);
  const { cart } = state;


  return (
    <div className="Header">
      <h1 className="Header-title">
        <Link to="/">EC Merch</Link>
      </h1>
      <div className="Header-checkout">
        <Link to="/checkout">
          <FontAwesomeIcon icon={faShoppingBasket} />
        </Link>
        {cart.length > 0 && <div className="Header-alert">{cart.length}</div>}
      </div>
    </div>
  );
}

export default Header;

