import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const title = process.env.REACT_APP_TITLE;
console.log(title)

ReactDOM.render(
  <React.StrictMode>
    <App title={title}/>
  </React.StrictMode>,
  document.getElementById('root')
);
