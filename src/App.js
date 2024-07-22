import logo from './logo.svg';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import { Route, Routes } from "react-router-dom";
import AIWS from "./pages/AIWS";
import Login from "./pages/Login";
import Main from "./pages/Main";
import Timer from "./pages/Timer";
import LinkInput from './components/TimeTable/LinkInput';
import TestPage from "./pages/TestPage";
import Ranking from "./pages/Ranking";

function App() {
  return (
    <div className="App">
        <Router>
        <Routes>
            <Route path="/" element={<Login/>} />
            <Route path="/main" element={<Main/>} />
            <Route path="/timer" element={<Timer/>} />
            <Route path="/aiws" element={<AIWS/>} />
            <Route path="/link" element={<LinkInput/>} />
            <Route path="/test" element={<TestPage/>} />
            <Route path="/ranking" element={<Ranking/>} />
        </Routes>
        </Router>
    </div>
  );
}

export default App;
