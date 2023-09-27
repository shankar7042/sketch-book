import { useSelector } from "react-redux";

import { COLORS, MENU_ITEMS } from "@/constants";

import styles from "./index.module.css";

const Toolbox = () => {
  const activeMenuItem = useSelector((state) => state.menu.activeMenuItem);
  const showStrokeToolOption = activeMenuItem === MENU_ITEMS.PENCIL;
  const showBrushToolOption =
    activeMenuItem === MENU_ITEMS.PENCIL ||
    activeMenuItem === MENU_ITEMS.ERASER;

  return (
    <div className={styles.toolboxContainer}>
      {showStrokeToolOption && (
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
      )}
      {showBrushToolOption && (
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
      )}
    </div>
  );
};

export default Toolbox;
