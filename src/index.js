import { render } from 'react-dom';
import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import App from './App';
import Inventory from './components/Inventory';
import Input from './components/Input';
import Login from './components/Login';
import Product from './components/Product';

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />} >
        <Route path='/inventory' element={<Inventory />} />
        <Route path='/input' element={<Input />} />
        <Route path='/login' element={<Login />} />
        <Route path='/product' element={<Product />} />

      </Route>
    </Routes>
  </BrowserRouter >,
  rootElement,
);



/*import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(

  <App />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
*/