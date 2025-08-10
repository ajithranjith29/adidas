import '../../styles/productSuperstar.css';
import { datas } from '../../lib/productsSuperstar.js';
import { useDispatch } from 'react-redux'; // Import useDispatch from Redux
import { addToCart } from '../../lib/cartSlice.js';

export default function ProductSuperstar() {
  const dispatch = useDispatch(); // Initialize Redux dispatch

  const handleAddToCart = (product) => {
    dispatch(addToCart(product)); // Dispatch the addToCart action with the product
  };

  return (
    <div className="product-superstar">
      {datas.map((data, index) => (
        <div className="product-card" key={index}>
          <div className="product-image">
            <img src={data.image} alt={data.alt} />
          </div>
          <div className="product-content">
            <h3 className="product-title">{data.title}</h3>
            <p className="product-price">{data.price}</p>
            <button
              className="product-button"
              onClick={() => handleAddToCart(data)} // Pass the product to the handler
            >
              Buy Now
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}