import "./Info.css";
import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import "../App.css";

const Info = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [pokemonStats, setPokemonStats] = useState(null);

  const url = "https://pokeapi.co/api/v2/pokemon/" + id;

  useEffect(() => {
    setIsLoading(true);
    axios.get(url).then((response) => {
      const infoPokemon = response.data;
      setData(infoPokemon);
      const { stats } = infoPokemon;
      setPokemonStats(stats);
    });
  }, []);

  function typeColor(type) {
    switch (type) {
      case "fire":
        return "#FDA752";

      case "grass":
        return "#5FBB50";
      case "poison":
        return "#C663D6";
      case "water":
        return "#4E91DB";
      case "normal":
        return "#999EA0";
      case "bug":
        return "#9BC230";
      case "electric":
        return "#F2D43E";
      case "fairy":
        return "#f6a7e8";
      case "ghost":
        return "#7571d0";
      case "ground":
        return "#d2976b";
      case "rock":
        return "#d7cd90";
      case "ice":
        return "#94ddd6";
      case "psychic":
        return "#fda194";
      case "dragon":
        return "#067fc4";
      case "fighting":
        return "#e34448";
      case "dark":
        return "#52505e";
      case "flying":
        return "#a7c1f2";
      case "steel":
        return "#5aafb4";
    }
  }

  if (data != null) {
    return (
      <div className="pokemon-info">
        <p>{id}</p>
        <img src={data.sprites.front_default} alt={id} height="100" />
        {data.sprites.front_shiny && (
          <img src={data.sprites.front_shiny} alt={id} width="100" />
        )}

        {pokemonStats.map((e, index) => {
          return (
            <div className="pokemon-stats" key={pokemonStats[index].stat.name}>
              <span className="stat-name">{pokemonStats[index].stat.name}</span>
              <span className="stat-value">{e.base_stat}</span>
            </div>
          );
        })}
        <div className="type-info">
          <span className="type-text">Type</span>

          {data.types.map((e, index) => {
            return (
              <span
                className="type-value"
                style={{
                  backgroundColor: typeColor(data.types[index].type.name),
                }}
                key={data.types[index].type.name}
              >
                {data.types[index].type.name}
              </span>
            );
          })}
        </div>
      </div>
    );
  } else {
    return <div className="loading">Loading...</div>;
  }
};

export default Info;
