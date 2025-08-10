
import { Link } from "react-router-dom";
export default function Card({image,title,description,alt,link}){
  return(
    <div className="card">

      <div className="card-image">
        <img src={image} alt={alt} />
      </div>
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>
        <Link to={link} className="card-button">Shop Now</Link>
      </div>
  
  </div>
  )
}