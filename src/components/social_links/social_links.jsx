import styles from "./social_links.module.css";

export const SocialLinks = () => {
  return (
    <>
      <div className={styles.links}>
        <a
          className={styles.links}
          href="mailto:shulgin.alexandera@gmail.com"
          target="blank"
        >
          <img
            className={styles.icon}
            src="https://cdn-icons-png.flaticon.com/128/5968/5968534.png"
            alt="Email"
          />
          <span></span>
        </a>
        <a
          className={styles.links}
          href="https://ekaterinburg.hh.ru/resume/e4e423a3ff0d6daa4b0039ed1f69656c6a394c"
          target="blank"
        >
          <img
            className={styles.icon}
            src="https://upload.wikimedia.org/wikipedia/commons/7/79/HeadHunter_logo.png"
            alt="hh.ru"
          />
          <span></span>
        </a>
      </div>
      <div className={styles.links}>
        <a href="https://github.com/Holyhelper1" target="blank">
          <img
            src="https://cdn-icons-png.flaticon.com/512/733/733553.png"
            alt="GitHub"
          />
          <span></span>
        </a>
        <a href="https://vk.com/alexdude" target="blank">
          <img
            src="https://cdn-icons-png.flaticon.com/512/145/145813.png"
            alt="VK"
          />
          <span></span>
        </a>
        <a
          href="https://linkedin.com/in/%D0%B0%D0%BB%D0%B5%D0%BA%D1%81%D0%B0%D0%BD%D0%B4%D1%80-%D1%88%D1%83%D0%BB%D1%8C%D0%B3%D0%B8%D0%BD-964b49267/"
          target="blank"
        >
          <img
            src="https://cdn1.iconfinder.com/data/icons/logotypes/32/circle-linkedin-512.png"
            alt="LinkedIn"
          />
          <span></span>
        </a>
        <a href="https://t.me/AlexanderShulg" target="blank">
          <img
            src="https://cdn-icons-png.flaticon.com/128/2111/2111646.png"
            alt="Telegram"
          />
          <span></span>
        </a>
      </div>
    </>
  );
};
