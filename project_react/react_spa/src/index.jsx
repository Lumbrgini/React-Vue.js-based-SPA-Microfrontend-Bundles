import React from 'react';
import ReactDOM from 'react-dom/client';
import './global-styles/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import '../i18n';
import { SwitchLanguageButton } from './components/switchLangBtn/switch-language-button';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <SwitchLanguageButton />
  </React.StrictMode>
);

reportWebVitals();
