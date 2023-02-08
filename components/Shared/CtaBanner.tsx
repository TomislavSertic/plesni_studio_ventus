import Link from "next/link";
import React from "react";
import styles from "./CtaBanner.module.scss";
export const CtaBanner: React.FC<{
  title: string;
  subtitle?: string;
  buttonText: string;
  buttonPath: string;
}> = ({ title, subtitle, buttonText, buttonPath }) => {
  return (
    <div className={styles["cta-banner"]}>
      <div className={styles["info"]}>
        <h2>{title}</h2>
        <h4>{subtitle}</h4>
      </div>
      <Link href={buttonPath} className={styles["cta-button"]}>
        <span>{buttonText}</span>
      </Link>
    </div>
  );
};
