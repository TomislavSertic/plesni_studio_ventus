import React from "react";
import { Navigation } from "./Navigation/Navigation";
import styles from "./Layout.module.scss";
export const Layout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <div className={styles.layout}>
      <Navigation />
      {children}
    </div>
  );
};
