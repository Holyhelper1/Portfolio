import styles from "./my-info.module.css";
import mainPhoto from "../../images/mainPhoto.jpg";
import { SocialLinks } from "../social_links/social_links";
import { en, LanguageContext, ru } from "../../utils";
import { useContext } from "react";
export const MyInfo = () => {
  const { language } = useContext(LanguageContext);
  const translations = language === "en" ? en : ru;
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{translations.portfolio}</h1>
      <div className={styles.info}>
        <div className={styles.left_container}>
          <img className={styles.mainPhoto} src={mainPhoto} alt="myPhoto" />
          <p>{translations.name}</p>
          <p>{translations.profession}</p>
          <p>{translations.phone}: +7 903 056 22 10</p>
          <p>Email: shulgin.alexandera@gmail.com</p>
          <SocialLinks />
        </div>

        <div className={styles.right_container}>
          <p>{translations.stack}</p>
          <div className={styles.skills}>
            <div className={styles.skillItem}>
              <div className={styles.skillItemInner}>
                <img
                  src="https://cdn-icons-png.flaticon.com/512/5968/5968292.png"
                  alt="JavaScript"
                />
              </div>
            </div>
            <div className={styles.skillItem}>
              <div className={styles.skillItemInner}>
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg"
                  alt="TS"
                />
              </div>
            </div>
            <div className={styles.skillItem}>
              <div className={styles.skillItemInner}>
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
                  alt="React"
                />
              </div>
            </div>
            <div className={styles.skillItem}>
              <div className={styles.skillItemInner}>
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg"
                  alt="Redux"
                />
              </div>
            </div>
            <div className={styles.skillItem}>
              <div className={styles.skillItemInner}>
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg"
                  alt="Node"
                />
              </div>
            </div>
            <div className={styles.skillItem}>
              <div className={styles.skillItemInner}>
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg"
                  alt="Docker"
                />
              </div>
            </div>
            <div className={styles.skillItem}>
              <div className={styles.skillItemInner}>
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg"
                  alt="Express"
                />
              </div>
            </div>
            <div className={styles.skillItem}>
              <div className={styles.skillItemInner}>
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg"
                  alt="MongoDB"
                />
              </div>
            </div>
            <div className={styles.skillItem}>
              <div className={styles.skillItemInner}>
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original-wordmark.svg"
                  alt="Git"
                />
              </div>
            </div>
            <div className={styles.skillItem}>
              <div className={styles.skillItemInner}>
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/d00d0969292a6569d45b06d3f350f463a0107b0d/icons/webpack/webpack-original-wordmark.svg"
                  alt="Webpack"
                />
              </div>
            </div>
            <div className={styles.skillItem}>
              <div className={styles.skillItemInner}>
                <img
                  src="https://cdn-icons-png.flaticon.com/128/5968/5968267.png"
                  alt="HTML"
                />
              </div>
            </div>
            <div className={styles.skillItem}>
              <div className={styles.skillItemInner}>
                <img
                  src="https://btihen.dev/posts/ruby/rails_6_1_tailwind_2_0_alpinejs/featured.png"
                  alt="CSS"
                />
              </div>
            </div>
            <div className={styles.skillItem}>
              <div className={styles.skillItemInner}>
                <img
                  src="https://cdn-icons-png.flaticon.com/128/5968/5968242.png"
                  alt="CSS"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
