import Image from "next/image";
import React from "react";
import styles from "./MobileModal.module.scss";
export const MobileModal: React.FC<{ closeNav: Function }> = ({ closeNav }) => {
  const closeNavigation = () => {
    closeNav();
  };
  return (
    <div className={styles["mobile-modal"]}>
      <div className={styles["close-btn"]} onClick={closeNavigation}>
        <Image
          src="/icons/close.png"
          width={48}
          height={48}
          alt="close mobile navigation icon"
        />
      </div>
      <div className={styles["logo"]}>
        <Image
          src="/images/main-logo-white.png"
          width={120}
          height={120}
          alt="Ventus logo"
        />
        <div className={styles["logo-text"]}>
          <span>Plesni</span>
          <span>Studio</span>
          <span>Ventus</span>
        </div>
      </div>
    </div>
  );
};
