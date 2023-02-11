import React from "react";
import Image from "next/image";
import styles from "./HeroSection.module.scss";
export const HeroSection: React.FC<{
  children: React.ReactNode;
  bgUrl: string;
}> = ({ children, bgUrl }) => {
  return (
    <div className={styles["hero-section"]}>
      <Image
        src={bgUrl}
        alt="decoration header image"
        width={1400}
        height={500}
      />
      <div className={styles["topDecoration"]}></div>
      {children}
    </div>
  );
};
