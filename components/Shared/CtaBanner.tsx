import Link from "next/link";
import React from "react";
import styles from "./CtaBanner.module.scss";
export const CtaBanner: React.FC<{ title: string }> = ({ title }) => {
  return (
    <div className={styles["cta-banner"]}>
      <div className={styles["info"]}>
        <h2>{title}</h2>
        <h4>
          Prijavite se i dobite 45-minuta lekciju upoznavanja - potpuno
          besplatno!!
        </h4>
      </div>
      <Link href="/signup" className={styles["cta-button"]}>
        <span>Prijavi Se!</span>
      </Link>
    </div>
  );
};
