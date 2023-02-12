import React from "react";
import styles from "./NewsList.module.scss";
import { Wrapper } from "../Layout/Wrapper/Wrapper";

export const NewsList = () => {
  return (
    <Wrapper>
      <div className={styles["news-list"]}>
        <h1>Dolazi Uskoro</h1>
      </div>
    </Wrapper>
  );
};
