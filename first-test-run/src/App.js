import React, { Component } from 'react';
import './App.css';
import Home from './components/Home';
import Test from './components/Test';
import InventoryTable from './components/Phones';
import { Routes, Route, Link } from 'react-router-dom';

function App() {
    return (
        <div className="App">
      <h2>Woz-U Terrians Super Awesome Inventory Tracker.</h2>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/test" element={<Test />} />
        <Route path="/inventoryTable" element={<InventoryTable />} />
      </Routes>
    </div>
    );
}

export default App;