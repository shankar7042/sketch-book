import { COLORS } from "@/constants";
import styles from "./index.module.css";

const Toolbox = () => {
  return (
    <div className={styles.toolboxContainer}>
      <div className={styles.toolItem}>
        <h4 className={styles.toolText}>Stroke Color</h4>
        <div className={styles.itemContainer}>
          {Object.keys(COLORS).map((color) => (
            <div
              key={color}
              className={styles.colorBox}
              style={{ backgroundColor: COLORS[color] }}
            />
          ))}
        </div>
      </div>
      <div className={styles.toolItem}>
        <h4 className={styles.toolText}>Brush Size</h4>
        <div className={styles.itemContainer}>
          <input
            type="range"
            name="brushSize"
            id="brushSize"
            min={1}
            max={10}
            step={1}
            className={styles.inputRange}
          />
        </div>
      </div>
    </div>
  );
};

export default Toolbox;
