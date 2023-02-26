import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import Pokemon from "../components/Pokemon";
import "./Search.css";
import "../App.css";
import psyduck from "../images/psyduck.png";

const Search = () => {
  const { id } = useParams();
  const [data, setData] = useState([null]);
  const [isLoading, setIsLoading] = useState(true);
  const url = "https://pokeapi.co/api/v2/pokemon/" + id;

  useEffect(() => {
    setIsLoading(true);

    const getData = async () => {
      await axios
        .get(url)
        .then((response) => {
          const infoPokemon = response.data;
          if (infoPokemon) {
            setData(infoPokemon);
          } else {
            setData([]);
          }
        })
        .catch((error) => {});
      setIsLoading(false);
    };
    getData();
  }, []);

  if (isLoading) {
    return <div className="loading">Loading...</div>;
  } else {
    if (data[0] === null) {
      return (
        <div className="searchResults">
          <span className="results-text">
            Psyduck is confused. Please try a different name.
          </span>
          <img
            className="results-psyduck"
            src={psyduck}
            width="150"
            height="150"
            alt="psyduck is so confused"
          />
        </div>
      );
    } else {
      return (
        <div>
          <ul className="products">
            <Pokemon name={id} url={url} />
          </ul>
        </div>
      );
    }
  }
};

export default Search;
