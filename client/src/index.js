import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { disableReactDevTools } from '@fvilers/disable-react-devtools';

import App from './App';
import { BrowserRouter } from 'react-router-dom';

if (process.env.NODE_ENV === 'production') {
  disableReactDevTools();
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>
);


