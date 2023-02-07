import React from "react";
import { Navigation } from "./Navigation/Navigation";
import styles from "./Layout.module.scss";
import { useRouter } from "next/router";
export const Layout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const router = useRouter();
  if (router.asPath.includes("/studio")) {
    return <div className={styles["studio-layout"]}>{children}</div>;
  }
  return (
    <div className={styles.layout}>
      <Navigation />
      {children}
    </div>
  );
};
