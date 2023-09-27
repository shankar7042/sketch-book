import { Eraser, FileDown, Pencil, Redo, Undo } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import cn from "classnames";

import { MENU_ITEMS } from "@/constants";
import { menuItemClick, actionItemClick } from "@/slice/menuSlice";

import styles from "./index.module.css";

const Menu = () => {
  const dispatch = useDispatch();
  const activeMenuItem = useSelector((state) => state.menu.activeMenuItem);

  const handleClick = (itemName) => {
    dispatch(menuItemClick(itemName));
  };

  const handleActionClick = (actionName) => {
    dispatch(actionItemClick(actionName));
  };

  return (
    <div className={styles.container}>
      <div
        className={cn(styles.iconContainer, {
          [styles.active]: activeMenuItem === MENU_ITEMS.PENCIL,
        })}
        onClick={() => handleClick(MENU_ITEMS.PENCIL)}
      >
        <Pencil className={styles.icon} />
      </div>
      <div
        className={cn(styles.iconContainer, {
          [styles.active]: activeMenuItem === MENU_ITEMS.ERASER,
        })}
        onClick={() => handleClick(MENU_ITEMS.ERASER)}
      >
        <Eraser className={styles.icon} />
      </div>
      <div
        className={styles.iconContainer}
        onClick={() => handleActionClick(MENU_ITEMS.UNDO)}
      >
        <Undo className={styles.icon} />
      </div>
      <div
        className={styles.iconContainer}
        onClick={() => handleActionClick(MENU_ITEMS.REDO)}
      >
        <Redo className={styles.icon} />
      </div>
      <div
        className={styles.iconContainer}
        onClick={() => handleActionClick(MENU_ITEMS.DOWNLOAD)}
      >
        <FileDown className={styles.icon} />
      </div>
    </div>
  );
};

export default Menu;
