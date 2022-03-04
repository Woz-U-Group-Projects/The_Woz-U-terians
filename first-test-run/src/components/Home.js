import React from 'react';
import { Routes, Route, Link } from "react-router-dom";

function Home() {
  return (
    <>
     <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Site Shortcuts</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/test">Test Page</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/inventoryTable">Inventory Overview</a>
      </li>
      </ul>
    <div className='titleText'>Francisco's Inventory Tracker | FINAL PROJECT</div>
  </div>
</nav>
    <h3 className='HPTitle'>HOME </h3>
    <div className='CSFeatures'> Time Clock (coming soon!)</div>
    <div className='CSFeatures'> Schedule View (coming soon!)</div>
    <Link to='/test' className='HPLinks'>Test Page</Link>
    <br />
    <Link to='/inventoryTable' className='HPLinks'>Inventory Overview</Link>    
    </>
  )
}

export default Home