import React from 'react';
import ReactDOM from 'react-dom/client';
import "./global-styles/index.css"
import "./global-styles/variables.css"
import App from './App';
import reportWebVitals from './reportWebVitals';
import '../i18n';
import { SwitchLanguageButton } from './components/switchLangBtn/switch-language-button';
import { ThemeProvider } from './components/themeProvider/themeProvider';
import { ThemeSwitcher } from './components/themeProvider/themeSwitcher';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <ThemeProvider>
      <App />
      <ThemeSwitcher />
    </ThemeProvider>
    <SwitchLanguageButton />
    
  </>
);

reportWebVitals();
