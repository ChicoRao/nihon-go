import { Link } from "react-router-dom";
import "../css/GameMenu.css";
import { useAudio } from "../hooks/useAudio";

const GameMenu = () => {
  const playButtonSound = useAudio("/nihon-go/sounds/click.mp3");

  return (
    <>
      <div className="game-menu">
        <h2>Nihon GO</h2>
        <ul>
          <li onClick={() => playButtonSound()}>
            <Link to="/quiz">NihonQuiz</Link>
          </li>
          <li onClick={() => playButtonSound()}>
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
          <li onClick={() => playButtonSound()}>
            <Link to="/settings">Settings</Link>
          </li>
          <li onClick={() => playButtonSound()}>
            <Link to="/">Home</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default GameMenu;
