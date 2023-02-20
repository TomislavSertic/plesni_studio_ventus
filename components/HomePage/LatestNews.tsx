import React from "react";
import { IPost } from "../../types/sanity-types";
import { NewsCard } from "../Cards/NewsCard";
import { Wrapper } from "../Layout/Wrapper/Wrapper";
import styles from "./LatestNews.module.scss";
export const LatestNews: React.FC<{ latestNews: IPost[] }> = ({
  latestNews,
}) => {
  return (
    <Wrapper>
      <div className={styles["latest-news"]}>
        <div className={styles["header"]}>
          <h1>Najnovije Vijesti</h1>
        </div>
        {latestNews ? (
          <div className={styles["news-list"]}>
            {latestNews.map((news) => {
              return (
                <div className={styles["news-container"]} key={news._id}>
                  <NewsCard newsPreview={news} />
                </div>
              );
            })}
          </div>
        ) : (
          <h2 style={{ textAlign: "center" }}>Žao nam je, nema vijesti</h2>
        )}
      </div>
      ;
    </Wrapper>
  );
};
