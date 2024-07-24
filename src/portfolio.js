import { Footer } from "./components";
import { Header } from "./components/header/header";
import { MyInfo } from "./components/my-info/my-info";
import { Projects } from "./components/projects/projects";
import styles from "./portfolio.module.css";

export const Portfolio = () => { 
  return (
    <div className={styles.container}>
      <Header />
      <MyInfo />
      <Projects />
      <Footer />
    </div>
  );
};
