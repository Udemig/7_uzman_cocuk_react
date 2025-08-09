import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import Appp from './Appp';
import { ToastContainer } from 'react-toastify';





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ToastContainer autoClose={1000} theme='dark' />
    <Appp />
  </React.StrictMode>
);


