import React from "react";
import styles from "./NavigationList.module.scss";
import { INavLink } from "../../../../types/general";
import { NavigationItem } from "./NavigationItem";
export const NavigationList: React.FC<{ navItems: INavLink[] }> = ({
  navItems,
}) => {
  return (
    <ul className={styles.navigationList}>
      {navItems.map((item) => {
        return <NavigationItem key={item.id} item={item} />;
      })}
    </ul>
  );
};
