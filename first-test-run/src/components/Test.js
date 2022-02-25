import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';

//This is a quick test page to see if router is working properly.  Page CAN be deleted after testing is complete. 
function Test() {
  return (
    <>
    <h3>You are viewing the "Test" page :D</h3>
    <Link to='/'>Home Page</Link>
    <br />
    <Link to='/inventoryTable'>Inventory</Link>

    </>
  )
}

export default Test