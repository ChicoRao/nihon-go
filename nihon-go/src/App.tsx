import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import GameMenu from "./pages/GameMenu";
import Settings from "./pages/Settings";
import Quiz from "./pages/Quiz";
import Typing from "./pages/Typing";
import "./css/App.css";

function App() {
  return (
    <Router basename="/nihon-go/">
      <div id="page-body">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/menu" element={<GameMenu />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/typing" element={<Typing />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
