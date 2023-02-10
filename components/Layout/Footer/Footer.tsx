import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Wrapper } from "../Wrapper/Wrapper";
import styles from "./Footer.module.scss";
import { FooterNav } from "./FooterNav";
export const Footer = () => {
  return (
    <footer className={styles["footer"]}>
      <Wrapper>
        <FooterNav />
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
        <div className={styles["social-icons"]}>
          <div className={styles["icon"]}>
            <a href="/" target="_blank">
              <Image
                src="/icons/fb.png"
                width={48}
                height={48}
                alt="facebook icon"
              />
            </a>
          </div>
          <div className={styles["icon"]}>
            <a href="/" target="_blank">
              <Image
                src="/icons/ig.png"
                width={48}
                height={48}
                alt="facebook icon"
              />
            </a>
          </div>
          <div className={styles["icon"]}>
            <a href="/" target="_blank">
              <Image
                src="/icons/yt.png"
                width={48}
                height={48}
                alt="facebook icon"
              />
            </a>
          </div>
          <div className={styles["icon"]}>
            <a href="/" target="_blank">
              <Image
                src="/icons/tiktok.png"
                width={48}
                height={48}
                alt="facebook icon"
              />
            </a>
          </div>
          <div className={styles["icon"]}>
            <a href="/" target="_blank">
              <Image
                src="/icons/telegram.png"
                width={48}
                height={48}
                alt="facebook icon"
              />
            </a>
          </div>
        </div>
        <div className={styles["legal"]}>
          <span>
            <Link href="/privacypolicy">Privacy Policy</Link>
          </span>
          <span className={styles["separator"]}>/</span>
          <span>Ventus Plesni Studio ® 2023 - Tomislav Sertić</span>
          <span className={styles["separator"]}>/</span>
          <span>All Rights Reserved</span>
        </div>
      </Wrapper>
    </footer>
  );
};
