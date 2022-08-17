import React, { useContext } from 'react';
import ButtonComponent from '../button/ButtonComponent';
import CartItem from '../cart-item/CartItem';
import { CartContext } from '../../contexts/CartContext';
import './carddropdown.scss';

const CardDropdown = () => {
  const { cartItems } = useContext(CartContext);
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        ))}
      </div>
      <ButtonComponent>CHECKOUT</ButtonComponent>
    </div>
  );
};

export default CardDropdown;
