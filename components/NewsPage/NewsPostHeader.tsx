import Image from "next/image";
import React from "react";
import styles from "./NewsPostHeader.module.scss";
import { readableDate } from "../../lib/helper-functions";
import { urlFor } from "../../lib/sanity.client";
import { IPost } from "../../types/sanity-types";

export const NewsPostHeader: React.FC<{ news: IPost }> = ({ news }) => {
  const { publishedAt, author, categories, mainImage, title } = news;
  return (
    <div className={styles["news-post-header"]}>
      <time className={styles["published"]}>{readableDate(publishedAt)}</time>

      <p className={styles["author"]}>{author.name}</p>

      <ul className={styles["tags-list"]}>
        {categories.map((cat) => {
          return (
            <li key={cat._id}>
              <span>#</span>
              {cat.title}
            </li>
          );
        })}
      </ul>

      <div className={styles["image-container"]}>
        <Image
          width={1200}
          height={600}
          alt={title}
          src={urlFor(mainImage).url()}
        />
      </div>
    </div>
  );
};
