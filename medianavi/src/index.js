import React from 'react';
import ReactGA from 'react-ga4';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './assets/css/style.css';
import App from './App';

const container = document.getElementById('app');
const root = createRoot(container);
ReactGA.initialize("G-144HB93NR5");
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
