import React from "react";
import { Wrapper } from "../Layout/Wrapper/Wrapper";
import styles from "./HeroTitle.module.scss";
export const HeroTitle = () => {
  return (
    <div className={styles["hero-title"]}>
      <div className={styles["shadow"]}></div>
      <Wrapper>
        <div className={styles["text-container"]}>
          <h1 className={styles.titleLower}>Kod nas naučite</h1>

          <h1 className={styles.titleMain}>PLESATI</h1>
        </div>
      </Wrapper>
    </div>
  );
};
