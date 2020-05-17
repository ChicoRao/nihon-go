import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import HomePage from './pages/HomePage';
import GameMenu from './pages/GameMenu';
import Settings from './pages/Settings';
import './css/App.css';

function App() {
  return (
    <Router>
      <div id="page-body">
        <Route path="/" component={HomePage} exact />
        <Route path="/gamemenu" component={GameMenu} />
        <Route path="/settings" component={Settings} />
      </div>
    </Router>
  );
}

export default App;
