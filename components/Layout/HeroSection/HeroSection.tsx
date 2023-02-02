import React from "react";
import { CtaBanner } from "../../Shared/CtaBanner";
import styles from "./HeroSection.module.scss";
export const HeroSection: React.FC<{
  children: React.ReactNode;
  bgUrl: string;
}> = ({ children, bgUrl }) => {
  return (
    <div
      className={styles["hero-section"]}
      style={{
        background: `url(${bgUrl})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
      }}
    >
      <div className={styles["topDecoration"]}></div>
      {children}
      <CtaBanner title="Dobro Došli Novi Studenti" />
    </div>
  );
};
