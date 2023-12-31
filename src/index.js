import React from 'react';

import ReactDOM from 'react-dom/client';
import './index.css';
import LogIn from './components/login';
import Register from './components/register'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'popper.js';
import 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { ToastContainer } from 'react-toastify';
import Customers from './components/customers';

const RouterApp = () => {

  return (
    <Router>
      <Routes>
        <Route path='/customers' element={<Customers />} />
        <Route path='/login' element={<LogIn />} />
        <Route path='/' element={<Register />} />
      </Routes>
    </Router>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterApp />
    <ToastContainer />
  </React.StrictMode>,
);
