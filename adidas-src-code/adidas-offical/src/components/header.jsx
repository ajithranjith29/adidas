import { Link } from "react-router-dom";
import { useState } from "react";
import { useSelector } from "react-redux"; // Import useSelector to access Redux state
import logoPng from "../../public/images/adidass_white.png";
import Modal from "./Modal";
import SearchResults from "./SearchItems";
import "../styles/SearchItems.css";
import { products } from "../lib/Products.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

export default function Header({ openModal, closeModal, isModalOpen }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [showResults, setShowResults] = useState(false);

  // Access the cart state from Redux
  const cartItems = useSelector((state) => state.cart.items);

  // Calculate the total quantity of items in the cart
  const totalCartItems = cartItems.reduce((total, item) => total + item.quantity, 0);

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    if (value.trim() === "") {
      setSearchResults([]);
      setShowResults(false);
      return;
    }

    const filtered = products.filter((product) =>
      product.title.toLowerCase().includes(value.toLowerCase())
    );

    setSearchResults(filtered);
    setShowResults(true);
  };

  const handleResultClick = () => {
    setShowResults(false);
    setSearchTerm("");
  };

  return (
    <header>
      <Link to="/">
        <div className="logo-container">
          <img src={logoPng} alt="adidas logo" />
        </div>
      </Link>

      <nav>
        <Link to="/superstar">SuperStar</Link>
        <Link to="/samba">Samba</Link>
        <Link to="/gazelle">Gazelle</Link>
        <Link to="/sl72">SL 72</Link>
        <Link to="/campus">Campus</Link>
        <Link to="/forum">Forum</Link>
        <Link to="/cricket">Cricket</Link>
      </nav>

      <div className="search-container">
        <input
          type="text"
          placeholder="Search Products..."
          value={searchTerm}
          onChange={handleSearch}
          onFocus={() => setShowResults(true)}
        />
        <SearchResults
          results={searchResults}
          visible={showResults}
          onResultClick={handleResultClick}
        />
      </div>

      <div className="cart">
        <Link to="/cart" className="link">
          <FontAwesomeIcon icon={faCartShopping} />
          {totalCartItems > 0 && <span className="cart-count">{totalCartItems}</span>}
        </Link>
      </div>

      <button onClick={openModal} className="login-btn">
        Sign Up
      </button>

      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </header>
  );
}