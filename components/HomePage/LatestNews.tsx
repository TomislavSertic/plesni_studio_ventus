import React from "react";
import { INewsCard } from "../../types/sanity-types";
import { NewsCard } from "../Cards/NewsCard";
import { Wrapper } from "../Layout/Wrapper/Wrapper";
import styles from "./LatestNews.module.scss";
export const LatestNews: React.FC<{ latestNews: INewsCard[] }> = ({
  latestNews,
}) => {
  console.log(latestNews);
  return (
    <Wrapper>
      <div className={styles["latest-news"]}>
        <div className={styles["header"]}>
          <h1>Najnovije Vijesti</h1>
        </div>
        <div className={styles["news-list"]}>
          <div className={styles["news-container"]}>
            <NewsCard />
          </div>
          <div className={styles["news-container"]}>
            <NewsCard />
          </div>
          <div className={styles["news-container"]}>
            <NewsCard />
          </div>
        </div>
      </div>
      ;
    </Wrapper>
  );
};
