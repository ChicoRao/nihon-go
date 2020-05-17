import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => (
    <React.Fragment>
        <div className="home-page">
            <h1 id="gameTitle">Nihon GO</h1>
            <p>Simple games for Japanese Learning</p>
            <Link to="/gamemenu" style={{textDecoration: 'none', color: 'black'}}><button id="start-button">Let's Begin</button></Link>
        </div>
    </React.Fragment>
);

export default HomePage;