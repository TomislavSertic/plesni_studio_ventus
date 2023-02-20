import { PortableText } from "@portabletext/react";
import React from "react";
import { IPost } from "../../types/sanity-types";
import { CustomPortableTextComponents } from "../sanity/CustomPortableTextComponents";
import styles from "./NewsBody.module.scss";
export const NewsBody: React.FC<{ news: IPost }> = ({ news }) => {
  return (
    <div className={styles["news-body"]}>
      <PortableText
        value={news.body}
        components={CustomPortableTextComponents}
      />
    </div>
  );
};
