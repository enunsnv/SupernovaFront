import logo from './logo.svg';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import TestPage from './pages/TestPage';
import {Route, Routes} from "react-router-dom";
import AIWS from "./pages/AIWS";
import Login from "./pages/Login";
import Main from "./pages/Main";
import Timer from "./pages/Timer";


function App() {
  return (
    <div className="App">
        <Router>
        <Routes>
            <Route path="/" element={<TestPage/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/main" element={<Main/>} />
            <Route path="/timer" element={<Timer/>} />
            <Route path="/aiws" element={<AIWS/>} />
        </Routes>
        </Router>
    </div>
  );
}

export default App;
