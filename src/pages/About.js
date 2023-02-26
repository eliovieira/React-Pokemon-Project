import React, { Fragment } from "react";
import "./About.css";

const About = () => {
  return (
    <Fragment>
      <div className="text-about-me">
        <p>Hey! I'm Élio, a Front-End Developer based out of Lisbon</p>
        <p>
          {" "}
          From producing music for artists all around the world to build Things
          on the web, I love to mix logic && minimalistic design to make
          user-friendly web applications.
        </p>{" "}
        Graduated in Information Systems, Web & Multimedia at Universidade
        Europeia. I'm a strong believer in self-taught programming, skilled in
        front-end development with a desire to learn and to grow in a
        collaborative team environment.
      </div>
    </Fragment>
  );
};

export default About;
