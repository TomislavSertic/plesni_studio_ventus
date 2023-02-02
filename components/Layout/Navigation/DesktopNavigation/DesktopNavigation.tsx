import React, { useCallback, useEffect, useState } from "react";
import styles from "./DesktopNavigation.module.scss";
import Image from "next/image";
import Link from "next/link";
import { Wrapper } from "../../Wrapper/Wrapper";
import { NAVIGATIONPATHS } from "../NAVIGATIONPATHS";
import { NavigationList } from "./NavigationList";
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
        <div className={styles["container"]}>
          {!scrolled && (
            <div className={styles.contact}>
              <p>Email: domagoj.sertic@gmail.com</p> <span>-</span>
              <p>Mobitel: 091-252-2235</p>
            </div>
          )}
          <div className={styles["nav-container"]}>
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
            <NavigationList navItems={NAVIGATIONPATHS} />
          </div>
        </div>
      </Wrapper>
    </div>
  );
};
