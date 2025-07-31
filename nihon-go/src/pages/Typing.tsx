import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { generate } from "../utils/typing";
import { currentTime } from "../utils/time";
import "../css/Typing.css";
import { hiraganaToRomaji } from "../constant/hiragana";

const japaneseList = generate(30);

function Typing() {
  const [index, setIndex] = useState(0);
  const [pastChars, setPastChars] = useState<string[]>([]);
  const [currentChar, setCurrentChar] = useState(japaneseList[0]);
  const [incomingChars, setIncomingChars] = useState(japaneseList.slice(1, 4));
  const [typedText, setTypedText] = useState("");
  const [score, setScore] = useState(0);
  const [isDone, setIsDone] = useState(false);

  const checkAnswer = () => {
    if (isDone) {
      return;
    }

    const romajiList = hiraganaToRomaji[currentChar];

    // Correct answer
    if (romajiList.includes(typedText)) {
      setScore(score + 1);
    }

    const newIndex = index + 1;
    setIndex(newIndex);

    if (newIndex >= 30) {
      setIsDone(true);
    }

    const pastCharsList: string[] = japaneseList.slice(
      Math.max(0, newIndex - 3),
      newIndex
    );
    setTypedText("");
    setPastChars(pastCharsList);
    setCurrentChar(japaneseList[newIndex]);
    setIncomingChars(japaneseList.slice(newIndex + 1, newIndex + 4));
  };

  const restart = () => {
    window.location.reload();
  };

  return (
    <>
      <div className="typing-game">
        <h1>NihonType</h1>
        {/* <div className="character-container"> */}
        <p className="characters">
          <span className="past-characters">{pastChars}</span>
          {index < 30 && (
            <span className="current-character">{currentChar}</span>
          )}
          <span className="incoming-characters">{incomingChars}</span>
        </p>
        <input
          className="typed-text-container"
          value={typedText}
          onChange={(e) => setTypedText(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              checkAnswer();
            }
          }}
        />
        <h3 className="score">Score: {score}</h3>
        <div className="buttons">
          <Link to="/">
            <button className="home-button button">Home</button>
          </Link>
          <button className="restart button" onClick={restart}>
            Restart
          </button>
        </div>
      </div>
    </>
  );
}

export default Typing;
