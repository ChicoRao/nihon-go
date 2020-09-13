import React from 'react';
import { Link } from 'react-router-dom';
import '../css/GameMenu.css';

const GameMenu = () => (
    <React.Fragment>
        <div className="game-menu">
            <h2>Nihon Go</h2>
            <ul>
                <Link to="/quiz" style={{textDecoration: 'none', color: 'black', pointerEvents: 'none'}}><li>Vocab Quiz - Coming Soon</li></Link>
                <Link to="/typing" style={{textDecoration: 'none', color: 'black'}}><li>NihonType</li></Link>
                <Link to="/settings" style={{textDecoration: 'none', color: 'black'}}><li>Settings</li></Link>
                <Link to="/" style={{textDecoration: 'none', color: 'black'}}><li>Home</li></Link>
            </ul>
        </div>
    </React.Fragment>
);

export default GameMenu;