import { Link } from "react-router-dom";
import "../css/HomePage.css";

const HomePage = () => (
  <>
    <div className="home-page">
      <h1 id="gameTitle">Nihon GO</h1>
      <p>Simple games for learning Japanese</p>
      <Link to="/menu">
        <button id="start-button">Let's Begin</button>
      </Link>
      <footer>@ 2020 Nihon GO</footer>
    </div>
  </>
);

export default HomePage;
