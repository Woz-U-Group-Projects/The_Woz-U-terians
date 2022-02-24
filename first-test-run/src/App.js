import React, { Component } from 'react';
import './App.css';
import Home from './components/Home';
import Test from './components/Test';
import { Route, Router, Link, Routes } from 'react-router-dom';

function App() {
    return (
        <div className='App'>
            <Route exact path='/' component={Home} />
        </div>
    );
}

export default App;