import { useLocation } from "react-router-dom";
import { ThemeSwitcher } from "../../../../react_spa/src/components/themeProvider/themeSwitcher";
import { SwitchLanguageButton } from "../../../../react_spa/src/components/switchLangBtn/switch-language-button";

const hideOn = ["/mf1", "/mf2"]; 

export function ButtonsHider() {
  const { pathname } = useLocation();

  const shouldHide = hideOn.includes(pathname);
  if (shouldHide) return null;

  return (
    <>
    <ThemeSwitcher />
    <SwitchLanguageButton />
    </>
  );
}