import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Settings.css'

const Settings = () => (
    <React.Fragment>
        <h2 id="setting-title">Settings</h2>
        <Link to="/" style={{textDecoration: 'none', color: 'black'}}><li>Home</li></Link>
    </React.Fragment>
);

export default Settings;