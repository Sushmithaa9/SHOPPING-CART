import "./Product.css";
import React from 'react';

const Product = ({ product, onAdd }) => {
  return (
    <div style={{ border: '1px solid gray', padding: 10, margin: 10 }}>
      <h3>{product.name}</h3>
      <p>Price: ${product.price}</p>
      <button onClick={() => onAdd(product)}>Add to Cart</button>
    </div>
  );
};

export default Product;
