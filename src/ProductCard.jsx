import React from 'react';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <div className="product-info">
        <h3>{product.strCategory}</h3>
        <img src={product.strCategoryThumb} alt={product.strCategory} />
        <button>SHOP NOW</button>
      </div>
    </div>
  );
};

export default ProductCard;