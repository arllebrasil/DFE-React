import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Main from './pages/main/Index';

const title = process.env.REACT_APP_TITLE;

ReactDOM.render(
  <React.StrictMode>
    <Main title ={title}/>
  </React.StrictMode>,
  document.getElementById('root')
);