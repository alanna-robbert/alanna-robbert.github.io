import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// The starting point. React finds <div id="root"> in public/index.html
// and draws the whole <App /> inside it.
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
