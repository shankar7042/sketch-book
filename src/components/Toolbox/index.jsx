import { useSelector, useDispatch } from "react-redux";
import cn from "classnames";

import { COLORS, MENU_ITEMS } from "@/constants";
import { changeBrushSize, changeColor } from "@/slice/toolboxSlice";

import styles from "./index.module.css";

const Toolbox = () => {
  const dispatch = useDispatch();

  const activeMenuItem = useSelector((state) => state.menu.activeMenuItem);
  const { color, size } = useSelector((state) => state.toolbox[activeMenuItem]);
  const showStrokeToolOption = activeMenuItem === MENU_ITEMS.PENCIL;
  const showBrushToolOption =
    activeMenuItem === MENU_ITEMS.PENCIL ||
    activeMenuItem === MENU_ITEMS.ERASER;

  const updateBrushSize = (e) => {
    dispatch(changeBrushSize({ item: activeMenuItem, size: e.target.value }));
  };

  const updateColor = (color) => {
    dispatch(changeColor({ item: activeMenuItem, color }));
  };

  return (
    <div className={styles.toolboxContainer}>
      {showStrokeToolOption && (
        <div className={styles.toolItem}>
          <h4 className={styles.toolText}>Stroke Color</h4>
          <div className={styles.itemContainer}>
            {Object.keys(COLORS).map((colorKey) => (
              <div
                key={colorKey}
                className={cn(styles.colorBox, {
                  [styles.active]: color === COLORS[colorKey],
                })}
                style={{ backgroundColor: COLORS[colorKey] }}
                onClick={() => updateColor(COLORS[colorKey])}
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
              value={size}
              onChange={updateBrushSize}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Toolbox;
