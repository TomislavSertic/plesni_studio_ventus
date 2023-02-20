import React, { useCallback, useEffect, useState } from "react";
import styles from "./Navigation.module.scss";
import Image from "next/image";
import Link from "next/link";
import { Wrapper } from "../Wrapper/Wrapper";
import { NAVIGATIONPATHS } from "./NAVIGATIONPATHS";
import { NavigationList } from "./DesktopNavigation/NavigationList";
import { MobileNavigation } from "./MobileNavigation/MobileNavigation";
export const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const onScroll = useCallback(() => {
    const { pageYOffset, scrollY } = window;
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
      className={`${styles["navigation"]} ${
        scrolled ? styles["scrolled"] : ""
      }`}
    >
      <Wrapper>
        <div className={styles["container"]}>
          {!scrolled && (
            <div className={styles.contact}>
              <p className={styles["contact-item"]}>
                <span className={styles.icon}>
                  <Image
                    alt="email icon"
                    src="/icons/mail-dark.png"
                    width={18}
                    height={18}
                  />
                </span>
                <a href="mailto:plesni.studio.ventus@gmail.com">
                  plesni.studio.ventus@gmail.com
                </a>
              </p>{" "}
              <span className={styles.separator}>-</span>
              <p className={styles["contact-item"]}>
                {" "}
                <span className={styles.icon}>
                  <Image
                    alt="email icon"
                    src="/icons/phone-dark.png"
                    width={18}
                    height={18}
                  />
                </span>{" "}
                <a href="tel:+385914455914">+385914455914</a>
              </p>
            </div>
          )}
          <div className={styles["nav-container"]}>
            <div className={styles["logo"]}>
              <Link href="/">
                <Image
                  src="/images/main-logo4.png"
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
            <MobileNavigation />
          </div>
        </div>
      </Wrapper>
    </div>
  );
};
