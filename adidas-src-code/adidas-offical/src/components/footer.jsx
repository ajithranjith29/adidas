import "../styles/footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4 className="footer-heading">Company</h4>
          <nav aria-label="Company" className="footer-links">
            <a href="/">About Us</a>
            <a href="/">Careers</a>
            <a href="/">Press</a>
          </nav>
        </div>
        <div className="footer-section">
          <h4 className="footer-heading">Products</h4>
          <nav aria-label="Products" className="footer-links">
            <a href="/">Shoes</a>
            <a href="/">Clothing</a>
            <a href="/">Accessories</a>
          </nav>
        </div>
        <div className="footer-section">
          <h4 className="footer-heading">Support</h4>
          <nav aria-label="Support" className="footer-links">
            <a href="/">Contact Us</a>
            <a href="/">FAQs</a>
            <a href="/">Shipping</a>
            <a href="/">Returns</a>
          </nav>
        </div>
        <div className="footer-section">
          <h4 className="footer-heading">Follow Us</h4>
          <nav aria-label="Social Media" className="footer-links">
            <a href="/" className="social-icon facebook">
              <i className="fab fa-facebook-f"></i> Facebook
            </a>
            <a href="/" className="social-icon instagram">
              <i className="fab fa-instagram"></i> Instagram
            </a>
            <a href="/" className="social-icon twitter">
              <i className="fab fa-twitter"></i> Twitter
            </a>
            <a href="/" className="social-icon youtube">
              <i className="fab fa-youtube"></i> YouTube
            </a>
          </nav>
        </div>
      </div>

      <div className="footer-main">
        <p>© 2025 Adidas. All Rights Reserved</p>
      </div>
    </footer>
  );
}
