import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart, clearCart } from '../lib/cartSlice';
import '../styles/cart.css';

const parsePrice = (price) => {
  if (typeof price === 'string') {
    return Number(price.replace(/[^0-9.-]+/g, ''));
  }
  return Number(price);
};

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const [notification, setNotification] = useState('');

  // Calculate the total price by ensuring the price is cleaned and converted to a number
  const totalPrice = cartItems.reduce(
    (total, item) => total + parsePrice(item.price) * item.quantity,
    0
  );

  const handleRemoveFromCart = (cartItemId) => { // Changed to cartItemId
    dispatch(removeFromCart(cartItemId)); // Pass cartItemId
    setNotification('Product removed from cart!');
    setTimeout(() => setNotification(''), 3000);
  };

  const handleClearCart = () => {
    dispatch(clearCart());
    setNotification('Cart cleared!');
    setTimeout(() => setNotification(''), 3000);
  };

  return (
    <div className="cart-container">
      <h1>Your Cart</h1>
      {notification && <div className="notification">{notification}</div>}
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          <div className="cart-items">
            {cartItems.map((item) => (
              <div key={item.cartItemId} className="cart-item"> {/* Use cartItemId as key */}
                <img src={item.image} alt={item.alt} />
                <div className="cart-item-details">
                  <h3>{item.title}</h3>
                  <p>Price: {item.price}</p>
                  <p>Quantity: {item.quantity}</p>
                  <p>Total: ₹{(parsePrice(item.price) * item.quantity).toFixed(2)}</p>
                </div>
                <div className="cart-item-actions">
                  <button onClick={() => handleRemoveFromCart(item.cartItemId)}>Remove</button> {/* Pass cartItemId */}
                </div>
              </div>
            ))}
          </div>
          <h2 className="cart-total">Total Price: ₹{totalPrice.toFixed(2)}</h2>
          <button onClick={handleClearCart} className="clear-cart">
            Clear Cart
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;