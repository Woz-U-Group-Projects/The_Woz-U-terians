import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Home from './screens/Home';
import About from './screens/About';
import Topics from './screens/Topics';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const App = () =>
(
  <Router>
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/inventory" component={Inventory} />
      <Route path="/login" component={Login} />
      <Route path="/input" component={Input} />
      <Route path="/product" component={Product} />
    </div>
  </Router>
);

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
reportWebVitals();
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

