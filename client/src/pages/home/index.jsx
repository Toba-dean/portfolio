import { useEffect } from "react";

import { Game } from "../../container";
import "./home.styles.scss";

const Home = () => {

  useEffect(() => {
    document.title = "dean - home"
  });

  return (
    <div className="main_home">
      <div className="left">
        <div className="top">
          <p className="intro">👋 ¡Hola!, Je suis</p>
          <h1>Sheriff Dean</h1>

          <p className="profession">
            <span>&gt;</span>
            Software Developer
          </p>
        </div>

        <div className="bottom">
          <p>
            {"// a self taught web developer."}
          </p>
          <p>
            {"// surf around to know more about me and what i do."}
          </p>

          <p className="resume">
            <a href="/">Resume</a>
          </p>
        </div>
      </div>

      <div className="right">
        <Game />
      </div>
    </div>
  )
}

export default Home
