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
            <a
              href="https://www.facebook.com/profile.php?id=100086596752037"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                src="/icons/fb.png"
                width={48}
                height={48}
                alt="facebook icon"
              />
            </a>
          </div>
          <div className={styles["icon"]}>
            <a
              href="https://www.instagram.com/plesnistudio_ventus"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                src="/icons/ig.png"
                width={48}
                height={48}
                alt="facebook icon"
              />
            </a>
          </div>
          {/*   <div className={styles["icon"]}>
            <a href="/" target="_blank" rel="noreferrer">
              <Image
                src="/icons/yt.png"
                width={48}
                height={48}
                alt="facebook icon"
              />
            </a>
          </div> */}
          {/* <div className={styles["icon"]}>
            <a href="/" target="_blank" rel="noreferrer">
              <Image
                src="/icons/tiktok.png"
                width={48}
                height={48}
                alt="facebook icon"
              />
            </a>
          </div> */}
          {/* <div className={styles["icon"]}>
            <a href="/" target="_blank" rel="noreferrer">
              <Image
                src="/icons/telegram.png"
                width={48}
                height={48}
                alt="facebook icon"
              />
            </a>
          </div> */}
        </div>
        <div className={styles["legal"]}>
          <span>
            <Link href="/privacypolicy">Privacy Policy</Link>
          </span>
          <span className={styles["separator"]}>/</span>
          <span>
            Ventus Plesni Studio ® 2023 -{" "}
            <a
              href="https://www.linkedin.com/in/tomislav-serti%C4%87-85a0941a3"
              target="_blank"
              rel="noreferrer"
            >
              Tomislav Sertić
            </a>
          </span>
          <span className={styles["separator"]}>/</span>
          <span>All Rights Reserved</span>
        </div>
      </Wrapper>
    </footer>
  );
};
