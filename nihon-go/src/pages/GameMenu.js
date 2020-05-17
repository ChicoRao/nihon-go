import React from 'react';
import { Link } from 'react-router-dom';

const GameMenu = () => (
    <React.Fragment>
        <div className="game-menu">
            <h2>Nihon Go</h2>
            <ul>
                <Link to="/" style={{textDecoration: 'none', color: 'black'}}><li>Hiragana/ Katakana Quiz</li></Link>
                <Link to="/" style={{textDecoration: 'none', color: 'black'}}><li>NihonType</li></Link>
                <Link to="/settings" style={{textDecoration: 'none', color: 'black'}}><li>Settings</li></Link>
                <Link to="/" style={{textDecoration: 'none', color: 'black'}}><li>Home</li></Link>
            </ul>
        </div>
    </React.Fragment>
);

export default GameMenu;