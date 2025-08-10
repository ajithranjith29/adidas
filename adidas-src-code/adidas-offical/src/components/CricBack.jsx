import { Link } from "react-router-dom";
import "../styles/CricBack.css";

export default function CricBack({ image, alt, caption, button }) {
  return (
    <div className="cricback">
      <div className="cb-image">
        <img src={image} alt={alt} />
        <div className="cb-content">
          <h4>{caption}</h4>
          <Link to="/cricket" className="button">
            {button} <span className="arrow">→</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
