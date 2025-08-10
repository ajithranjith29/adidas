import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../lib/cartSlice';
import { products } from '../lib/Products.js';

export default function ProductList() {
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product)); // Dispatch the full product object
  };

  return (
    <div className="product-list">
      {products.map((product) => (
        <div key={product.id} className="product-item">
          <img src={product.image} alt={product.alt || 'Product Image'} />
          <h3>{product.title}</h3>
          <p>Price: ₹{product.price}</p>
          <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
}