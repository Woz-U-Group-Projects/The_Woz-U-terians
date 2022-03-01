import React from 'react';
import './App.css';
import Home from './components/Home';
import Test from './components/Test';
import InventoryTable from './components/InventoryTable';
import { Routes, Route } from 'react-router-dom';

function App() {
    return (
        <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/test" element={<Test />} />
        <Route path="/inventoryTable" element={<InventoryTable />} />
      </Routes>
    </div>
    );
}

export default App;