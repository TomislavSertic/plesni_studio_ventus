import React from "react";
import { Wrapper } from "../Layout/Wrapper/Wrapper";
import styles from "./LightPageTitle.module.scss";
export const LightPageTitle: React.FC<{ title: string; subtitle?: string }> = ({
  title,
  subtitle,
}) => {
  return (
    <Wrapper>
      <header className={styles["light-title"]}>
        <h1>{title}</h1>
        {subtitle && <h4>{subtitle}</h4>}
      </header>
    </Wrapper>
  );
};
