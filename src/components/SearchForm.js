import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./SearchForm.css";

const SearchForm = () => {
  const navigate = useNavigate();
  const [query, setQuery] = useState();
  const [error, setError] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    if (query) {
      navigate("/search/" + query);
      setError(false);
    } else {
      setError(true);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        onChange={(e) => {
          setQuery(e.target.value);
          setError(false);
        }}
        placeholder="Ex: Venussaur or 3"
      />
      {error && (
        <span className="error-text">please insert a correct number/name</span>
      )}
    </form>
  );
};

export default SearchForm;
