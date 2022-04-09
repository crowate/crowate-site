import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './pages/home/Home'


ReactDOM.render(
  <React.StrictMode>
    <Home/>
  </React.StrictMode>,   
  document.getElementById('root')
);