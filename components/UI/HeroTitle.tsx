import React from "react";
import styles from "./HeroTitle.module.scss";
export const HeroTitle: React.FC<{
  title: string;
  subtitle?: string;
}> = ({ title, subtitle }) => {
  return (
    <div className={styles["hero-title"]}>
      <div className={styles["info"]}>
        <h2>{title}</h2>
        <h4>{subtitle}</h4>
      </div>
    </div>
  );
};
