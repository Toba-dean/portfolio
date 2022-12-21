import "./home.styles.scss";

const Home = () => {
  return (
    <div className="main">
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
        game goes here
      </div>
    </div>
  )
}

export default Home
