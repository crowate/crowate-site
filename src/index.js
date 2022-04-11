import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './pages/home/Home'
import Post from './pages/post/Post'

import Update from './components/Profile/ProfileUpdate'


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,   
  document.getElementById('root')
);