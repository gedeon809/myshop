import React, { useContext } from 'react';
import './checkout.scss';
import { CartContext } from '../../contexts/CartContext';
import CheckoutItemCompo from '../../components/checkout-item/CheckoutItemCompo';

const CheckoutComponent = () => {
  const { cartItems, cartTotal } = useContext(CartContext);
  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((cartItem) => {
        return <CheckoutItemCompo key={cartItem.id} cartItem={cartItem} />;
      })}
      <span className="total">Total: R{cartTotal}</span>
    </div>
  );
};

export default CheckoutComponent;
