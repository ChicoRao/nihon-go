import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { generate } from "../utils/typing";
import useKeyPress from "../hooks/useKeyPress";
import { currentTime } from "../utils/time";
import "../css/Typing.css";

const japaneseList = generate();
const japaneseString = japaneseList.join("");

function Typing() {
  // const [leftPadding, setLeftPadding] = useState(" ".repeat(30));
  // const [outgoingChars, setOutgoingChars] = useState("");
  // const [currentChar, setCurrentChar] = useState(japaneseList[0]);
  // const [incomingChars, setIncomingChars] = useState(
  //   japaneseString.slice(japaneseList[0].length)
  // );
  // const [typedText, setTypedText] = useState("");
  // const [score, setScore] = useState(0);
  // const [startTime, setStartTime] = useState<number | null>(null);

  // // Refs for mutable state that shouldn't trigger re-renders
  // const romanjiContainer = useRef("");
  // const maxAcceptedLength = useRef(0);
  // const index = useRef(0);
  // const isDone = useRef(false);

  // useKeyPress((key: string) => {
  //   if (isDone.current) return;

  //   if (!startTime) setStartTime(currentTime());

  //   if (key === "Backspace") {
  //     romanjiContainer.current = romanjiContainer.current.slice(0, -1);
  //     setTypedText(romanjiContainer.current);
  //     return;
  //   }

  //   romanjiContainer.current += key;
  //   setTypedText(romanjiContainer.current);

  //   const romanjiList = hiraganaToRomaji[currentChar] || [];

  //   maxAcceptedLength.current = Math.max(
  //     ...romanjiList.map((r) => r.length),
  //     maxAcceptedLength.current
  //   );

  //   const isMatch = romanjiList.includes(romanjiContainer.current);

  //   if (isMatch) {
  //     setScore((prev) => prev + 1);

  //     // shift characters forward
  //     if (leftPadding.length > 0) {
  //       setLeftPadding((prev) => prev.slice(1));
  //     }

  //     setOutgoingChars((prev) => prev + currentChar);

  //     index.current += 1;
  //     romanjiContainer.current = "";
  //     maxAcceptedLength.current = 0;

  //     const nextChar = japaneseList[index.current];
  //     if (nextChar) {
  //       setCurrentChar(nextChar);
  //       const rest = japaneseList.slice(index.current).join("");
  //       setIncomingChars(rest.slice(nextChar.length));
  //     } else {
  //       isDone.current = true;
  //     }
  //   } else if (romanjiContainer.current.length >= maxAcceptedLength.current) {
  //     // reset incorrect input
  //     romanjiContainer.current = "";
  //     setTypedText("");
  //   }
  // });

  // const reset = () => {
  //   window.location.reload();
  // };

  return (
    <>
      <div className="typing-game">
        <h1>NihonType</h1>
        <div className="character-container">
          <p className="characters">
            <span className="past-characters">ぎぎぎ</span>
            <span className="current-character">ぎ</span>
            <span className="incoming-character">ぎぎぎぎぎ</span>
          </p>
        </div>
        {/* <div className="typing-container">
          <p className="Character">
            <span className="Character-out">
              {(leftPadding + outgoingChars).slice(-11)}
            </span>
            <span className="Character-current">{currentChar}</span>
            <span>{incomingChars.slice(0, 11)}</span>
          </p>
        </div> */}
        {/* <h3 className="typed-text-container">{typedText}</h3>
        <h3 className="score">Score: {score}</h3> */}
        <div className="buttons">
          <Link to="/">
            <button className="home-button button">Home</button>
          </Link>
          <button className="restart button">Restart</button>
        </div>
      </div>
    </>
  );
}

export default Typing;
