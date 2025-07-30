import { Link } from "react-router-dom";
import "../css/GameMenu.css";

const GameMenu = () => (
  <>
    <div className="game-menu">
      <h2>Nihon GO</h2>
      <ul>
        <li>
          <Link
            to="/quiz"
            style={{
              pointerEvents: "none",
            }}
          >
            Vocab Quiz
          </Link>
        </li>
        <li>
          <Link to="/typing">NihonType</Link>
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
