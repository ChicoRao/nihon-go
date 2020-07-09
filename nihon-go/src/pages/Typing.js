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
    window.location.reload(false);
}

function Typing() {
    const [leftPadding, setLeftPadding] = useState(
        new Array(15).fill('  ').join(''),
    );

    //Already typed characters appearing on the left
    const [outgoingChars, setOutgoingChars] = useState('');

    //Current character to type
    const [currentChar, setCurrentChar] = useState(japaneseList[0]);

    //Incoming characters to type
    const [incomingChars, setIncomingChars] = useState(japaneseString.substr(japaneseList[0].length));

    const [startTime, setStartTime] = useState();
    // const [wpm, setWpm] = useState(0);
    const [score, setScore] = useState(0);
    const [typedText, setTypedText] = useState(" ");

    useKeyPress(key => {
        if (!isDone) {
            if (!startTime) {
                setStartTime(currentTime());
            }
        
            // console.log("typed key: " + key);
            // console.log("current char: " + currentChar);
        
            let updatedOutgoingChars = outgoingChars;
            let updatedIncomingChars = incomingChars;
            let romanjiList = hiraganaToRomaji[currentChar];
        
            // console.log("romanjiList: " + romanjiList);
        
            for (let i = 0; i < romanjiList.length; i++) {
                if (romanjiList[i].length > maxAcceptedLength) {
                    maxAcceptedLength = romanjiList[i].length;
                }
            }
        
            romanjiContainer += key;
            setTypedText(romanjiContainer);
        
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
                    <div className="typing-container">
                        <p className="Character">
                        <span className="Character-out">
                            {(leftPadding + outgoingChars).slice(-15)}
                        </span>
                        <span className="Character-current">{currentChar}</span>
                        <span>{incomingChars.substr(0,15)}</span>
                        </p>
                    </div>
                    <h3 className="typed-text-container">
                        {typedText}
                    </h3>
                    <h3 className="score">
                        Score: {score}
                    </h3>
                    <div className="buttons">
                        <Link to="/" style={{textDecoration: 'none', color: 'black'}}><button className="home-button button">Home</button></Link>
                        <button className="restart button" onClick={reset}>Restart</button>
                    </div>
                </div>
            </header>
        </div>
    );
}

export default Typing;