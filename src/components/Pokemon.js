import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import "../App.css";

function Pokemon({ name, url }) {
  const [details, setDetails] = useState(null);

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        const pokemonDetails = response.data;
        setDetails(pokemonDetails);
      })
      .catch((error) => console.log(error));
  }, []);

  if (details != null) {
    return (
      <div className="pokemon">
        <span className="pokemon-name">{details.name}</span>

        <Link to={`/pokemon/${details.name}`}>
          <img src={details.sprites.front_default} alt={details.name} />
        </Link>
      </div>
    );
  }
}

export default Pokemon;
