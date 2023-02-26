import React from "react";
import snorlax from "../images/snorlax.png";
const NotFound = () => {
  return (
    <div className="searchResults">
      <span className="results-text">Shhhhh. Page not found.</span>
      <img
        className="results-psyduck"
        src={snorlax}
        width="150"
        height="150"
        alt="psyduck is so confused"
      />
    </div>
  );
};

export default NotFound;
