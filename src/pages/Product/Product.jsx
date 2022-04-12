import React from 'react';
import './Product.css';

export default function Product() {
  return (
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">Product</h1>
        <button className="createProductBtn">Create</button>
      </div>
    </div>
  );
}
