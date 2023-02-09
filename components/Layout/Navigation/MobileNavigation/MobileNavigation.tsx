import Image from "next/image";
import React, { useState } from "react";
import { MobileModal } from "./MobileModal";
import styles from "./MobileNavigation.module.scss";
export const MobileNavigation = () => {
  const [navOpen, setNavOpen] = useState(false);
  const openNavHandler = () => {
    setNavOpen(true);
  };
  const closeNavHandler = () => {
    setNavOpen(false);
  };
  return (
    <>
      <div className={styles["mobile-navigation"]}>
        {navOpen && <MobileModal closeNav={closeNavHandler} />}
        <div className={styles["hambi"]} onClick={openNavHandler}>
          <Image
            src="/icons/hamburger.png"
            width={48}
            height={48}
            alt="open menu icon"
          />
        </div>
      </div>
    </>
  );
};
