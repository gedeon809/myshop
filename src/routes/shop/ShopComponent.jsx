import React, { useContext } from 'react';
import ProductCard from '../../components/product-card/ProductCard';

import './shopComponent.scss';

import { ProductsContext } from '../../contexts/ProductContext';

const ShopComponent = () => {
  const { products } = useContext(ProductsContext);
  return (
    <div className="shop-container">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ShopComponent;
