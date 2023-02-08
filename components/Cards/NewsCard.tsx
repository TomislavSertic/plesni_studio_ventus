import Image from "next/image";
import React from "react";
import { INewsCard } from "../../types/sanity-types";
import { PlusIcon } from "../Icons/PlusIcon";
import styles from "./NewsCard.module.scss";
export const NewsCard: React.FC<{ newsPreview?: INewsCard }> = ({
  newsPreview,
}) => {
  /* const {
    postType,
    title,
    slug,
    author,
    mainImage,
    categories,
    description,
    publishedAt,
  } = newsPreview; */

  return (
    <div className={styles["news-card"]}>
      <div className={styles["img-container"]}>
        <span className={styles["plus-icon"]}>
          <PlusIcon width={32} height={32} />
        </span>
        <Image
          width={300}
          height={200}
          alt={"title"}
          src="/images/disco-dance.png"
        />
      </div>
      <div className={styles["tag-list"]}>
        <span>#Advice</span>
        <span>#Event</span>
        <span>#Samba</span>
      </div>
      <div className={styles["content"]}>
        <h1>Zašto je dobro plesati? Saznajte 5 trikova</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi
          vero illo enim veritatis temporibus ipsam distinctio corporis ipsum
          alias ullam?
        </p>
      </div>
      <time className={styles.date}>January 16,2022</time>
    </div>
  );
};
