import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import InitialScreen from './pages/Start';
import AIWS from './pages/AIWS';
import Login from './pages/Login';
import Main from './pages/Main';
import Timer from './pages/Timer';
import LinkInput from './components/TimeTable/LinkInput';
import TestPage from './pages/TestPage';
import './App.css'; // Import the global CSS

function App() {
  const [showInitialScreen, setShowInitialScreen] = useState(true);

  return (
    <div className="App">
      {showInitialScreen ? (
        <InitialScreen setShowInitialScreen={setShowInitialScreen} />
      ) : (
        <Router>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/main" element={<Main />} />
            <Route path="/timer" element={<Timer />} />
            <Route path="/aiws" element={<AIWS />} />
            <Route path="/link" element={<LinkInput />} />
            <Route path="/test" element={<TestPage />} />
          </Routes>
        </Router>
      )}
    </div>
  );
}

export default App;
