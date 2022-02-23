import React, { Component } from 'react';
import './App.css';
import Home from './components/Home';
import Test from './components/Test';
import { Route, Link } from 'react-router-dom';

function App() {
    return (
        <div className="App">
            <Route exact path ="/" component={Home} />
            <Route exact path ="/test" component={Test} />
        </div>
    );
}

export default App;