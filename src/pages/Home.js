import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Pokemon from "../components/Pokemon";

import "./Home.css";
import SearchForm from "../components/SearchForm";

const Home = () => {
  const [data, setData] = useState(null);
  const url = "https://pokeapi.co/api/v2/pokemon/";

  useEffect(() => {
    if (!data) {
      const getData = () => {
        axios
          .get(url)
          .then((response) => {
            const arrayPokemon = response.data.results;
            setData(arrayPokemon);
          })
          .catch((error) => console.log(error));
      };

      getData();
    }
  }, []);

  return (
    <div className="listPokemon">
      <SearchForm />
      {data &&
        data.map((pokemon) => {
          return (
            <Pokemon key={pokemon.name} name={pokemon.name} url={pokemon.url} />
          );
        })}
    </div>
  );
};

export default Home;
