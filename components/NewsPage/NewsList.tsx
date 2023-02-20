import React from "react";
import styles from "./NewsList.module.scss";
import { Wrapper } from "../Layout/Wrapper/Wrapper";
import { IPost } from "../../types/sanity-types";
import { NewsCard } from "../Cards/NewsCard";

export const NewsList: React.FC<{ news: IPost[] }> = ({ news }) => {
  return (
    <Wrapper>
      <div className={styles["news-list"]}>
        {news.map((item) => {
          return (
            <div key={item._id} className={styles["item-container"]}>
              <NewsCard newsPreview={item} />
            </div>
          );
        })}
      </div>
    </Wrapper>
  );
};
