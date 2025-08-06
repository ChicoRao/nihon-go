import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { generate } from "../utils/typing";
import "../css/Typing.css";
import { hiraganaToRomaji, LIST_LENGTH } from "../constant/hiragana";
import ResultPopup from "../component/ResultPopup";

function Typing() {
  const japaneseList = useRef(generate(LIST_LENGTH));
  const startTimeRef = useRef<number | null>(null);

  const [index, setIndex] = useState(0);
  const [pastChars, setPastChars] = useState<string[]>([]);
  const [currentChar, setCurrentChar] = useState(japaneseList.current[0]);
  const [incomingChars, setIncomingChars] = useState(
    japaneseList.current.slice(1, 4)
  );
  const [typedText, setTypedText] = useState("");
  const [score, setScore] = useState(0);
  const [isStart, setIsStart] = useState(false);
  const [isDone, setIsDone] = useState(false);

  // Results
  const [accuracy, setAccuracy] = useState("");
  const [timeTaken, setTimeTaken] = useState("");

  const calculateResults = (finalScore: number) => {
    // Calculate time
    if (startTimeRef.current !== null) {
      const end = performance.now();
      const elapsed = ((end - startTimeRef.current!) / 1000).toFixed(2);
      setTimeTaken(elapsed);
    }

    // Calculate accuracy
    setAccuracy(((finalScore / LIST_LENGTH) * 100).toFixed(2));
  };

  const checkAnswer = () => {
    if (isDone) {
      return;
    }

    const romajiList = hiraganaToRomaji[currentChar];

    // Correct answer
    let newScore = score;
    if (romajiList.includes(typedText)) {
      newScore += 1;
    }

    setScore(newScore);

    const newIndex = index + 1;
    setIndex(newIndex);

    if (newIndex >= LIST_LENGTH) {
      calculateResults(newScore);
      setIsDone(true);
    }

    const pastCharsList: string[] = japaneseList.current.slice(
      Math.max(0, newIndex - 3),
      newIndex
    );
    setTypedText("");
    setPastChars(pastCharsList);
    setCurrentChar(japaneseList.current[newIndex]);
    setIncomingChars(japaneseList.current.slice(newIndex + 1, newIndex + 4));
  };

  const restart = () => {
    window.location.reload();
  };

  return (
    <>
      <div className="typing-game">
        <h1>NihonType</h1>
        <p className="characters">
          <span className="past-characters">{pastChars}</span>
          {index < LIST_LENGTH && (
            <span className="current-character">{currentChar}</span>
          )}
          <span className="incoming-characters">{incomingChars}</span>
        </p>
        <input
          className="typed-text-container"
          value={typedText}
          onChange={(e) => setTypedText(e.target.value)}
          onKeyDown={(e) => {
            //Start timer
            if (!isStart && index === 0) {
              setIsStart((prev) => !prev);
              startTimeRef.current = performance.now();
            }

            if (e.key === "Enter" && index < LIST_LENGTH) {
              checkAnswer();
            }
          }}
        />
        <h3 className="score">Score: {score}</h3>
        <div className="buttons">
          <Link to="/menu">
            <button className="home-button button">Menu</button>
          </Link>
          <button className="restart button" onClick={restart}>
            Restart
          </button>
        </div>
      </div>
      {isDone && (
        <ResultPopup
          score={score}
          accuracy={accuracy}
          total={LIST_LENGTH}
          time={timeTaken}
          onRestart={restart}
        />
      )}
    </>
  );
}

export default Typing;
