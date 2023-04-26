import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';
import ThemeChange from './components/ThemeChange/ThemeChange';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <ThemeChange>
      <App /> 
    </ThemeChange>
  </React.StrictMode>
);
