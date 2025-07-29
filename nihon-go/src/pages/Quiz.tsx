import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { generate, quizQuestions } from '../utils/quiz';
import '../css/Quiz.css'

//Generate 100 random prompts
const promptList = generate();

function shuffle(arr) {
    return arr.sort(() => Math.random() - 0.5);
}

console.log(promptList);
console.log(quizQuestions);

function Quiz() {
    const [score, setScore] = useState(0);
    const [index, setIndex] = useState(0); 
    const [prompt, setPrompt] = useState(promptList[index]);
    const [options, setOptions] = useState(shuffle(quizQuestions[prompt][0]));
    const [isCorrect, setIsCorrect] = useState(false);

    // console.log("Prompt: " + prompt);
    // console.log("Options: " + options);

    function updateQuestion() {
        setIndex((index+1)%promptList.length)
        let newPrompt = promptList[index];
        setPrompt(newPrompt);
        setOptions(quizQuestions[prompt][0]);
        setIsCorrect(false);
    }

    function checkAnswer(option) { 
        setIndex((index+1)%promptList.length);
        console.log("Index: " + index);
        setPrompt(promptList[index]);
        setOptions(quizQuestions[prompt][0]);
        setIsCorrect(false);
        // if(option === quizQuestions[prompt][1]) {
        //     console.log("正解 (せいかい), Correct!");
        //     setIsCorrect(true);
        //     setScore(score + 1);
        //     updateQuestion();
        // }else {
        //     console.log("Wrong, try again");
        // }
    }

    return (
        <React.Fragment>
            <div className="quiz-container">
                <div className="question-container">
                    <h3 id="quiz-question">{isCorrect? "正解 (せいかい), Correct!" : "What is the English meaning for the following Japanese words?"}</h3>
                    <h4 id="quiz-prompt">{prompt}</h4>
                    <div id="answer-buttons">
                        <button className="ans-btn" onClick={()=>checkAnswer(options[0])} style={{"backgroundColor": "deepSkyBlue"}}>{options[0]}</button>
                        <button className="ans-btn" onClick={()=>checkAnswer(options[1])} style={{"backgroundColor": "gold"}}>{options[1]}</button>
                        <button className="ans-btn" onClick={()=>checkAnswer(options[2])} style={{"backgroundColor": "tomato"}}>{options[2]}</button>
                        <button className="ans-btn" onClick={()=>checkAnswer(options[3])} style={{"backgroundColor": "#6bfa6b"}}>{options[3]}</button>
                    </div>
                    <p className="quiz-score">
                        Score: {score}
                    </p>
                </div>
                <div className="quiz-controls">
                    <Link to="/" style={{textDecoration: 'none', color: 'black'}}><button className="home-button button">Home</button></Link>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Quiz;