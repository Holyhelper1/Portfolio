import styles from "./button.module.css";
export const Button = ({ children, ...props }) => {
  return (
    <button className={styles.all_button} {...props}>
      {children}
    </button>
  );
};
