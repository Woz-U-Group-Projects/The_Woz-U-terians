import React, { Component } from 'react';
import './App.css';
import Home from './components/Home';
import Test from './components/Test';
import { Routes, Route, Link } from 'react-router-dom';

function App() {
    return (
        <div className="App">
      <h1>Welcome to React Router!</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="test" element={<Test />} />
      </Routes>
    </div>
    );
}

export default App;