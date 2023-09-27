import { Eraser, FileDown, Pencil, Redo, Undo } from "lucide-react";
import styles from "./index.module.css";

const Menu = () => {
  return (
    <div className={styles.container}>
      <div className={styles.iconContainer}>
        <Pencil className={styles.icon} />
      </div>
      <div className={styles.iconContainer}>
        <Eraser className={styles.icon} />
      </div>
      <div className={styles.iconContainer}>
        <Undo className={styles.icon} />
      </div>
      <div className={styles.iconContainer}>
        <Redo className={styles.icon} />
      </div>
      <div className={styles.iconContainer}>
        <FileDown className={styles.icon} />
      </div>
    </div>
  );
};

export default Menu;
