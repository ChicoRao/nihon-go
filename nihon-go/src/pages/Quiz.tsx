import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { LIST_LENGTH } from "../constant/quiz";
import { generate } from "../utils/quiz";
import "../css/Quiz.css";
import ResultPopup from "../component/ResultPopup";

function Quiz() {
  const promptList = useRef(generate(LIST_LENGTH));

  const [score, setScore] = useState(0);
  const [index, setIndex] = useState(0);
  const [prompt, setPrompt] = useState(promptList.current[0].prompt);
  const [options, setOptions] = useState(
    shuffle(promptList.current[0].options)
  );
  const [isDone, setIsDone] = useState(false);

  function shuffle(arr: any) {
    const array = [...arr];
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  function checkAnswer(option: string) {
    if (isDone || index >= LIST_LENGTH) return;

    if (option === promptList.current[index].answer) {
      const newScore = score + 1;
      setScore(newScore);
    }

    const newIndex = index + 1;

    if (newIndex >= LIST_LENGTH) {
      setIsDone(true);
      return;
    }

    setIndex(newIndex);
    setPrompt(promptList.current[newIndex].prompt);
    setOptions(promptList.current[newIndex].options);
  }

  const restart = () => {
    window.location.reload();
  };

  return (
    <>
      <div className="quiz-container">
        <div className="question-container">
          <p className="question-number">
            Question {index + 1} out of {LIST_LENGTH}
          </p>
          <h3 className="question">
            What is the English meaning for the following Japanese word?
          </h3>
          <h4 className="question-prompt">{prompt}</h4>
          <div className="answers-container">
            {options.map((option: any) => {
              return (
                <button className="answer" onClick={() => checkAnswer(option)}>
                  {option}
                </button>
              );
            })}
          </div>
          <h3 className="quiz-score">Score: {score}</h3>
        </div>
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
        <ResultPopup score={score} total={LIST_LENGTH} onRestart={restart} />
      )}
    </>
  );
}

export default Quiz;
