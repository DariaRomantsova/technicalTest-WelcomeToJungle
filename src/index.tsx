import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { store } from './ducks/root';
import { createTheme, WuiProvider } from '@welcome-ui/core';
import { theme } from "./helpers/theme";

const currentTheme = createTheme(theme);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <WuiProvider theme={currentTheme}>
        <App />
      </WuiProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
