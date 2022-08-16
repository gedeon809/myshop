import React, { useContext } from 'react';
import './cardicon.scss';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { CartContext } from '../../contexts/CartContext';

const CardIcon = () => {
  const { isCardOpen, setIsCardOpen } = useContext(CartContext);
  const toggleIsCartOpen = () => setIsCardOpen(!isCardOpen);
  return (
    <div className="cart-icon-container" onClick={toggleIsCartOpen}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  );
};

export default CardIcon;
