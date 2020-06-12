import React from 'react';
import { Link } from 'react-router-dom';
import '../utils/quiz';

const question = [

]

const Quiz = () => (
    <React.Fragment>
        <div className="quiz-container">
            <div className="question-container">
                <h4 id="quiz-question">Question</h4>
                <div id="answer-buttons">
                    <button className="ans-btn">A1</button>
                    <button className="ans-btn">A2</button>
                    <button className="ans-btn">A3</button>
                    <button className="ans-btn">A4</button>
                </div>
            </div>
            <div class="quiz-controls">
                <Link to="/" style={{textDecoration: 'none', color: 'black'}}><li>Home</li></Link>
            </div>
            <h4>${question}</h4>
        </div>
    </React.Fragment>
);

export default Quiz;