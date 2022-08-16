import React from 'react';
import ButtonComponent from '../button/ButtonComponent';
import './carddropdown.scss';

const CardDropdown = () => {
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items" />
      <ButtonComponent>CHECKOUT</ButtonComponent>
    </div>
  );
};

export default CardDropdown;
