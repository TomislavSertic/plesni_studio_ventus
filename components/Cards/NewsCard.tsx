import Image from "next/image";
import Link from "next/link";
import React from "react";
import { readableDate } from "../../lib/helper-functions";
import { urlFor } from "../../lib/sanity.client";
import { IPost } from "../../types/sanity-types";
import { PlusIcon } from "../Icons/PlusIcon";
import styles from "./NewsCard.module.scss";
export const NewsCard: React.FC<{ newsPreview: IPost }> = ({ newsPreview }) => {
  const {
    title,
    slug,
    author,
    mainImage,
    categories,
    description,
    publishedAt,
  } = newsPreview;
  return (
    <div className={styles["news-card"]}>
      <Link href={`/news/${slug.current}`}>
        <div className={styles["img-container"]}>
          <span className={styles["plus-icon"]}>
            <PlusIcon width={32} height={32} />
          </span>
          <Image
            width={300}
            height={200}
            alt={title}
            src={urlFor(mainImage).url()}
          />
        </div>
      </Link>
      <div className={styles["tag-list"]}>
        {categories.map((category) => (
          <span key={category._id}>#{category.title}</span>
        ))}
      </div>
      <div className={styles["content"]}>
        <Link href={`/news/${slug.current}`}>
          <h1>{title}</h1>
        </Link>
        <p>{description}</p>
      </div>
      <time className={styles.date}>{readableDate(publishedAt)}</time>
    </div>
  );
};
