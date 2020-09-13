import React from 'react';
import {
  HashRouter as Router,
  Route,
} from 'react-router-dom';
import HomePage from './pages/HomePage';
import GameMenu from './pages/GameMenu';
import Settings from './pages/Settings';
import Quiz from './pages/Quiz';
import Typing from './pages/Typing';
import './css/App.css';

function App() {
  return (
    <Router>
      <div id="page-body">
        <Route path="/" component={HomePage} exact />
        <Route path="/gamemenu" component={GameMenu} />
        <Route path="/settings" component={Settings} />
        <Route path="/quiz" component={Quiz} />
        <Route path="/typing" component={Typing} />
      </div>
    </Router>
  );
}

export default App;
