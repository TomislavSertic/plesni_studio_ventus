import React, { useCallback, useEffect, useState } from "react";
import styles from "./DesktopNavigation.module.scss";
import Image from "next/image";
import Link from "next/link";
import { Wrapper } from "../../Wrapper/Wrapper";
import { NAVIGATIONPATHS } from "../NAVIGATIONPATHS";
export const DesktopNavigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const onScroll = useCallback(() => {
    const { pageYOffset, scrollY } = window;
    console.log("yOffset", pageYOffset, "scrollY", scrollY);
    if (pageYOffset !== 0) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
    console.log(scrolled, " scrollY");
  }, []);
  useEffect(() => {
    //add eventlistener to window
    window.addEventListener("scroll", onScroll, { passive: true });
    // remove event on unmount to prevent a memory leak with the cleanup
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);
  return (
    <div
      className={`${styles["desktop-navigation"]} ${
        scrolled ? styles["scrolled"] : ""
      }`}
    >
      <Wrapper>
        <div className={styles["logo"]}>
          <Link href="/">
            <Image
              src="/images/main-logo.png"
              width={80}
              height={80}
              alt="Plesni Studio Ventus logo"
            />
            <div className={styles["logo-text"]}>
              <span>Plesni</span>
              <span>Studio</span>
              <span>Ventus</span>
            </div>
          </Link>
        </div>
        <ul className={styles["navigation"]}>
          {NAVIGATIONPATHS.map((path) => {
            return <li key={path.id}>{path.name}</li>;
          })}
        </ul>
      </Wrapper>
    </div>
  );
};
