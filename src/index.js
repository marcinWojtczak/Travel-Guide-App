import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { store } from './app/store';
import { Provider } from 'react-redux';
import { ApiProvider} from '@reduxjs/toolkit/query/react'
import { coordinatesApi } from './services/coordinatesApi';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <ApiProvider api={coordinatesApi}>
      <App />
    </ApiProvider >
  </Provider> 
);



