import logo from './logo.svg';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import TestPage from './pages/TestPage';
import {Route, Routes} from "react-router-dom";

function App() {
  return (
    <div className="App">
        <Router>
        <Routes>
            <Route path="/" element={<TestPage/>} />
        </Routes>
        </Router>
    </div>
  );
}

export default App;
