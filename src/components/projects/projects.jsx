import React, { useContext, useState } from "react";
import styles from "./projects.module.css";
import { Button } from "../button/button";
import { en, LanguageContext, ru } from "../../utils";

export const Projects = () => {
  const { language } = useContext(LanguageContext);
  const translations = language === "en" ? en : ru;
  const [activeIndex, setActiveIndex] = useState(null);
  const projectsArray = [
    {
      name: "iReserve",
      description: `${translations.descriptionIReserve}`,
      link: "http://212.60.21.70/",
      git: "https://github.com/Holyhelper1/iReserve.git",
      img: "https://sun9-78.userapi.com/impg/4xa7g2CC1zPJRsbBA0U14DDBfEWWO8GLBXaJmw/0BUzMcJrFfA.jpg?size=1915x924&quality=96&sign=cffaaeddefcb9915e090accf9576cc5c&type=album",
    },
    {
      name: "Vertical Slider",
      description: `${translations.descriptionVertical}`,
      link: "https://holyhelper1.github.io/VerticalSlider/",
      git: "https://github.com/Holyhelper1/VerticalSlider",
      img: "https://sun9-30.userapi.com/impg/JuiOraoQurkFyhPNj94zCM97bNh4CcEImKmRkA/F4XgykNVj2o.jpg?size=1893x894&quality=96&sign=9d30eb774e0ff4d64088e383158a68f3&type=album",
    },
    {
      name: "Parallax scrolling web",
      description: `${translations.descriptionParallax}`,
      link: "https://holyhelper1.github.io/Scrolling-web/",
      git: "https://github.com/Holyhelper1/Scrolling-web",
      img: "https://sun9-52.userapi.com/impg/8TJnrufRIopGIKIlDVCnsXs4xssmdCNXgW4kjg/86pCYRgocLE.jpg?size=1835x843&quality=96&sign=7e324616bf642086e05ebd57d74b3501&type=album",
    },
  ];

  const handleSlideClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className={styles.page_container}>
      <h1 className={styles.title}>{translations.projects}</h1>
      <hr className={styles.hr} />
      <div className={styles.container}>
        {projectsArray.map((project, index) => (
          <div
            className={`${styles.slide} ${
              activeIndex === index ? styles.active : ""
            }`}
            key={project.name}
            onClick={() => handleSlideClick(index)}
          >
            <a href={project.link} target="blank">
              <h3>
                {project.name}
                <Button>{translations.demo}</Button>
              </h3>
            </a>
            <img className={styles.img} src={project.img} alt={project.name} />
            {activeIndex === index && (
              <p className={styles.description}>{project.description}</p>
            )}
            <a href={project.git} target="blank">
              <Button>{translations.gitRepository}</Button>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};
