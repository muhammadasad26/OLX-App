import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import store from "./store";
import { Provider } from "react-redux";
import AppRouter from "./config/router";

ReactDOM.render(
  <Provider store={store}>
    <AppRouter>
      <App />
    </AppRouter>
  </Provider>
  ,
  document.getElementById('root')
);


