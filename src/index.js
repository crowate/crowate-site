import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Comment from './components/Comment/Comment';
import 'bootstrap/dist/css/bootstrap.min.css'
import CreateComment from './components/Create Comment/CreateComment';

const temp = {
  id: "1",
  User_ID: "a03415bd-732d-41c5-b6a9-a85264bdabce",
  Username: "fartbox",
  Comment: "this is a long comment about how beautiful this picture is like god damn",
  ProfilePic: "https://f004.backblazeb2.com/file/Crowate-Profile-Data/User-Profile-512.png"
}

ReactDOM.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,   
  document.getElementById('root')
);