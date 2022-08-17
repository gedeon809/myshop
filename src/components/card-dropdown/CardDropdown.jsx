import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import ButtonComponent from '../button/ButtonComponent';
import CartItem from '../cart-item/CartItem';
import { CartContext } from '../../contexts/CartContext';
import './carddropdown.scss';
// useNavigate will allow me to get the nav function
const CardDropdown = () => {
  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    navigate('/checkout');
  };
  const { cartItems } = useContext(CartContext);
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        ))}
      </div>
      <ButtonComponent onClick={goToCheckoutHandler}>CHECKOUT</ButtonComponent>
    </div>
  );
};

export default CardDropdown;
