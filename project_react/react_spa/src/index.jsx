import React from 'react';
import ReactDOM from 'react-dom/client';
import "./global-styles/index.css"
import "./global-styles/variables.css"
import App from './App';
import reportWebVitals from './reportWebVitals';
import '../i18n';
import { ThemeProvider } from './components/themeProvider/themeProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </>
);



reportWebVitals();
