import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import LogIn from './components/login';
import Register from './components/register'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'popper.js';
import 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const RouterApp = () => {
  return (
    <Router>
      <Routes>
        <Route path='/login' element={<LogIn />} />
        <Route path='/' element={<Register />} />
      </Routes>
    </Router>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <RouterApp />
  </React.StrictMode>,
  document.getElementById('root')
);
