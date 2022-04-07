import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'

import Update from './components/Profile/ProfileUpdate'


ReactDOM.render(
  <React.StrictMode>
    <Update userID = "edc19309-e134-4ffb-8a68-d0b3f829a05c"/>
  </React.StrictMode>,   
  document.getElementById('root')
);