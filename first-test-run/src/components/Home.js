import React from 'react';
import { Routes, Route, Link } from "react-router-dom";

function Home() {
  return (
    <>
    <h3>You are viewing the "Home" page :D</h3>
    <Link to='/test'>Test Page</Link>
    </>
  )
}

export default Home