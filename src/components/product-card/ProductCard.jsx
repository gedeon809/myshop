import React, { useContext } from 'react';
import ButtonComponent from '../button/ButtonComponent';
import './productCard.scss';
import { CartContext } from '../../contexts/CartContext';

const ProductCard = ({ product }) => {
  //destructing my object
  const { name, price, imageUrl } = product;
  const { addItemToCart } = useContext(CartContext);

  const addProductToCart = () => addItemToCart(product);
  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <ButtonComponent buttonType="inverted" onClick={addProductToCart}>
        Add to Card
      </ButtonComponent>
    </div>
  );
};

export default ProductCard;
