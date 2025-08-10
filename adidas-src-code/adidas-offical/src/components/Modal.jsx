import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Modal({ isOpen, onClose }) {
  const [isAccountCreated, setIsAccountCreated] = useState(false); // Track account creation
  const navigate = useNavigate();

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsAccountCreated(true);
    setTimeout(() => {
      setIsAccountCreated(false);
      navigate("/");
      onClose();
    }, 3000);
  };

  return (
    <div className="modal-backdrop">
      <div className="modal-wrapper">
        <div className="modal-content">
          <button className="close-btn" onClick={onClose}>
            &times;
          </button>
          {isAccountCreated ? (
            <div className="mini-modal">
              <h3>Account Created Successfully!</h3>
              <p>Thanks for joining with us...</p>
            </div>
          ) : (
            <>
              <h2 className="form-title">Sign Up</h2>
              <form className="form-container" onSubmit={handleSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    placeholder="First Name"
                    required
                    autoComplete="given-name"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    placeholder="Last Name"
                    required
                    autoComplete="family-name"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    placeholder="Email"
                    required
                    autoComplete="email"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    placeholder="Password"
                    required
                    autoComplete="new-password"
                  />
                </div>
                <button type="submit" className="submit-btn">
                  Create Account
                </button>
                <div className="form-divider">
                  <span>or</span>
                </div>
                <button type="button" className="submit-btn" onClick={onClose}>
                  Continue as Guest
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
