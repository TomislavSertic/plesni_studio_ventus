import React from "react";
import styles from "./InfoBoxItem.module.scss";
export const InfoBoxItem: React.FC<{
  title: string;
  children: React.ReactNode;
}> = ({ title, children }) => {
  return (
    <li className={styles["item"]}>
      <span className={styles["title"]}>{title}</span>
      <span>{children}</span>
    </li>
  );
};
