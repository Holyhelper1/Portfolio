import { useContext } from "react";
import { SocialLinks } from "../social_links/social_links";
import styles from "./footer.module.css";
import { en, LanguageContext, ru } from "../../utils";
export const Footer = () => {
  const { language } = useContext(LanguageContext);
  const translations = language === "en" ? en : ru;
  return (
    <footer className={styles.footer}>
      <div>
        <p>{translations.contacts}</p>
        <p>{translations.phone}: +7 903 056 22 10</p>
        <p>Email: shulgin.alexandera@gmail.com</p>
      </div>
      <div>
        <SocialLinks />
        <p>{translations.footerNote}</p>
      </div>
    </footer>
  );
};
