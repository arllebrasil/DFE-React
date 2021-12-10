import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/home';

const appName = process.env.REACT_APP_NOME;

ReactDOM.render(
  <React.StrictMode>
    <Home appName={appName}/>
  </React.StrictMode>,
  document.getElementById('root')
);