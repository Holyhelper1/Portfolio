import { useContext } from "react";
import { Button } from "../button/button";
import styles from "./header.module.css";
import { en, LanguageContext, ru } from "../../utils";
export const Header = () => {
  const { toggleLanguage } = useContext(LanguageContext);
  const { language } = useContext(LanguageContext);
  const translations = language === "en" ? en : ru;

  return (
    <header className={styles.header}>
      <Button onClick={() => document.body.classList.toggle("light")}>
        {translations.changeTheme}
      </Button>
      <Button onClick={toggleLanguage}>{translations.changeLanguage}</Button>
    </header>
  );
};
