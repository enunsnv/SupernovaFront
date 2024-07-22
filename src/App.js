import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import InitialScreen from './pages/Start';
import AIWS from './pages/AIWS';
import Login from './pages/Login';
import Main from './pages/Main';
import Staff from './pages/Staff';
import Timer from './pages/Timer';
import logo from './logo.svg';
import './App.css';
import LinkInput from './components/TimeTable/LinkInput';
import TestPage from "./pages/TestPage";
import Ranking from "./pages/Ranking";

function App() {
  return (
    <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/staff" element={<Staff/>}/>
            <Route path="/main" element={<Main />} />
            <Route path="/timer" element={<Timer />} />
            <Route path="/aiws" element={<AIWS />} />
            <Route path="/link" element={<LinkInput />} />
            <Route path="/test" element={<TestPage />} />
            <Route path="/ranking" element={<Ranking />} />
          </Routes>
        </Router>
    </div>
  );
}

export default App;
