import { Link } from "react-router-dom";

const SearchResults = ({ results, visible, onResultClick }) => {
  if (!visible || results.length === 0) return null;

  return (
    <div className="search-results">
      {results.map((item, index) => (
        <Link
          to={item.link}
          key={index}
          className="search-result-item"
          onClick={onResultClick}
        >
          <img src={item.image} alt={item.title} />
          <div className="search-result-info">
            <h3>{item.title}</h3>
            <p>{item.price}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default SearchResults;