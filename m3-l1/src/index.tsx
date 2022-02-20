import React from 'react';
import ReactDOM from 'react-dom';
import App from './pages/app/App';
import { store } from './app/store';
import { Provider } from 'react-redux';
import GlobalStyle from './global/styles';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <GlobalStyle />
      <App title='Meu App Redux'/>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);