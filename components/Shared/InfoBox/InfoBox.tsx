import React from "react";
import styles from "./InfoBox.module.scss";
export const InfoBox: React.FC<{
  children: React.ReactNode;
  title: string;
}> = ({ children, title }) => {
  return (
    <div className={styles["info-box"]}>
      <h3>{title}</h3>
      <ul>{children}</ul>
    </div>
  );
};
