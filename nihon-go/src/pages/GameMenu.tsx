import { Link } from "react-router-dom";
import "../css/GameMenu.css";

const GameMenu = () => (
  <>
    <div className="game-menu">
      <h2>Nihon GO</h2>
      <ul>
        <li>
          <Link to="/quiz">NihonQuiz</Link>
        </li>
        <li>
          <Link to="/typing-game">NihonType</Link>
        </li>
        <li>
          <Link
            to="/"
            style={{
              pointerEvents: "none",
            }}
          >
            NihonTalk - Coming Soon
          </Link>
        </li>
        <li>
          <Link to="/settings">Settings</Link>
        </li>
        <li>
          <Link to="/">Home</Link>
        </li>
      </ul>
    </div>
  </>
);

export default GameMenu;
