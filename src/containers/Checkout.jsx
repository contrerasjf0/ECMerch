import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import '../styles/components/Checkout.css';

const Checkout = () => {
  return (
    <>
      <h1>Checkout</h1>
      <div className="Checkout">
        <div className="Checkout-content">
          <h3>Lista de Pedidos:</h3>
          <div className="Checkout-item">
            <div className="Checkout-element">
              <h4>ITEM name</h4>
              <span>$10</span>
            </div>
            <button type="button">
              <FontAwesomeIcon icon={faTrashAlt} />
            </button>
          </div>
        </div>
        <div className="Checkout-sidebar">
          <h3>Precio Total: $10</h3>
          <Link to="/checkout/information">
            <button type="button">Continuar pedido</button>
          </Link>
        </div>
      </div>
    </>
  );
}
