import React, { useState } from 'react';
import { Link, generatePath } from 'react-router-dom';
import { generate, hiraganaToRomaji } from '../utils/typing';
import useKeyPress from '../hooks/useKeyPress';
import { currentTime } from '../utils/time';
import '../css/Typing.css';

const japaneseList = generate();
let japaneseString = japaneseList.join('');
console.log(japaneseList);
console.log(japaneseString);

let maxAcceptedLength = 0;
let romanjiContainer = "";
let index = 0;
var isDone = false;

function reset() {
    japaneseString = japaneseList.join('');
    isDone = false;
    maxAcceptedLength = 0;
    romanjiContainer = "";
    index = 0;
    isDone = false;
}

function Typing() {
  const [leftPadding, setLeftPadding] = useState(
      new Array(20).fill(' ').join(''),
  );

  const [outgoingChars, setOutgoingChars] = useState('');
  const [currentChar, setCurrentChar] = useState(japaneseList[0]);
  const [incomingChars, setIncomingChars] = useState(japaneseString.substr(japaneseList[0].length));

  const [startTime, setStartTime] = useState();
  // const [wpm, setWpm] = useState(0);
  const [score, setScore] = useState(0);
  const [typedText, setTypedText] = useState(" ");

  useKeyPress(key => {
    console.log("is it done: " + isDone);
    if (!isDone) {
        if (!startTime) {
            setStartTime(currentTime());
        }
    
        console.log("typed key: " + key);
        console.log("current char: " + currentChar);
    
        let updatedOutgoingChars = outgoingChars;
        let updatedIncomingChars = incomingChars;
        let romanjiList = hiraganaToRomaji[currentChar];
    
        console.log("romanjiList: " + romanjiList);
    
        for (let i = 0; i < romanjiList.length; i++) {
            if (romanjiList[i].length > maxAcceptedLength) {
                maxAcceptedLength = romanjiList[i].length;
            }
        }
    
        console.log("max accepted length: " + maxAcceptedLength);
    
        romanjiContainer += key;
        setTypedText(romanjiContainer);
    
        console.log("romanjiContainer: " + romanjiContainer);
    
        if (romanjiContainer.length < maxAcceptedLength) {
            for (let i = 0; i < romanjiList.length; i++) {
                if (romanjiContainer === romanjiList[i]) {
                    console.log("Correct!")
                    setScore(score + 1);
            
                    //Moving the characters
                    if (leftPadding.length > 0) {
                        setLeftPadding(leftPadding.substring(1));
                    }
            
                    updatedOutgoingChars += currentChar;
                    setOutgoingChars(updatedOutgoingChars);
            
                    index += 1;
            
                    setCurrentChar(japaneseList[index]);
            
                    if(index !== japaneseList.length) {
                        updatedIncomingChars = incomingChars.substring(japaneseList[index].length);
                    }else {
                        console.log("Done");
                        isDone = true;
                        console.log("isDone: " + isDone);
                    }
            
                    setIncomingChars(updatedIncomingChars); 
                    
                    //Setting WPM
                    // setWordCount(wordCount + 1);
                    // const durationInMinutes = (currentTime() - startTime) / 60000.0;
                    // setWpm(((wordCount + 1) / durationInMinutes).toFixed(2));
            
                    //Clearing out romanjiContainer and maxAcceptedLength
                    romanjiContainer = "";
                    maxAcceptedLength = 0;
                }
            }
        }else if (romanjiContainer.length === maxAcceptedLength) {
    
        for (let i = 0; i < romanjiList.length; i++) {
            if (romanjiContainer === romanjiList[i]) {
            console.log("Correct!");
            setScore(score + 1);
            }
        }
    
        //Moving the characters
        if (leftPadding.length > 0) {
            setLeftPadding(leftPadding.substring(1));
        }
    
        updatedOutgoingChars += currentChar;
        setOutgoingChars(updatedOutgoingChars);
    
        index += 1;
    
        setCurrentChar(japaneseList[index]);
    
        if(index !== japaneseList.length) {
            updatedIncomingChars = incomingChars.substring(japaneseList[index].length);
        }else {
            console.log("Done");
            isDone = true;
            console.log("isDone: " + isDone);
        }
    
        setIncomingChars(updatedIncomingChars); 
    
        //Clearing out romanjiContainer and maxAcceptedLength
        romanjiContainer = "";
        maxAcceptedLength = 0;
        }
    }
  });

  return (
    <div className="App">
      <header className="App-header">
        <div className="typing-game">
            <h1>NihonType</h1>
            <section className="typing-container">
                <p className="Character">
                <span className="Character-out">
                    {(leftPadding + outgoingChars).slice(-30)}
                </span>
                <span className="Character-current">{currentChar}</span>
                <span>{incomingChars.substr(0,20)}</span>
                </p>
            </section>
            <h3 className="typed-text-container">
                {typedText}
            </h3>
            <h3 className="score">
                Score: {score}
            </h3>
            <div className="buttons">
                <Link to="/" style={{textDecoration: 'none', color: 'black'}}><button className="home-button button">Home</button></Link>
                <button className="restart button" onclick="reset()">Restart</button>
            </div>
        </div>
      </header>
    </div>
  );
}

export default Typing;