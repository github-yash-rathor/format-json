import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import JsonFormatter from './projects/jsonFormatter';
import RemoveUnwantedCharacters from './projects/removeUnwantedCharacter';
import Project3 from './projects/project3';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/json-formatter" element={<JsonFormatter />} />
        <Route path="/removeUnwantedCharacters" element={<RemoveUnwantedCharacters />} />
        <Route path="/project3" element={<Project3 />} />
      </Routes>
    </Router>
  );
}

export default App;
