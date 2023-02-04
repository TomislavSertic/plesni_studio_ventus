import Link from "next/link";
import React from "react";
import styles from "./Button.module.scss";
export const Button: React.FC<{
  children: React.ReactNode;
  urlPath: string;
  invert?: boolean;
}> = ({ children, urlPath, invert = false }) => {
  return (
    <Link
      href={urlPath}
      className={`${styles.button} ${invert && styles.invert}`}
    >
      {children}
    </Link>
  );
};
