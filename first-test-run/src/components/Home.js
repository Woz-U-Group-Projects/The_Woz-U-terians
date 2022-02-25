import React from 'react';
import { Routes, Route, Link } from "react-router-dom";

function Home() {
  return (
    <>
    <h3>You are viewing the "Home" page :D</h3>
    <Link to='/test'>Test Page</Link>
    <br />
    <Link to='/inventoryTable'>Inventory Table</Link>    
    </>
  )
}

export default Home