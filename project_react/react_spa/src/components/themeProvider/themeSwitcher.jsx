import { useContext } from "react";
import { ThemeContext } from "./themeContext";
import './themeSwitcher.css'

export function ThemeSwitcher() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button onClick={toggleTheme} className="themeSwitcher">
      {theme === "light" ? "🌑" : "☀️"}
    </button>
  );
}