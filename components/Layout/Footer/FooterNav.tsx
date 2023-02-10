import Link from "next/link";
import React from "react";
import styles from "./FooterNav.module.scss";
import Image from "next/image";
export const FooterNav = () => {
  return (
    <nav className={styles["footer-nav"]}>
      <div className={styles["footer-group"]}>
        <h2>Contacts</h2>
        <ul className={styles["footer-group__list"]}>
          <li>
            <a href="mailto:plesni.studio.ventus@gmail.com">
              plesni.studio.ventus@gmail.com
            </a>
          </li>
          <li>+385914455915</li>
        </ul>
      </div>
      <div className={styles["footer-group"]}>
        <h2>Novosti</h2>
        <ul className={styles["footer-group__list"]}>
          <li>
            <Link href="/events">Eventi</Link>
          </li>
          <li>
            <Link href="/events">Vijesti</Link>
          </li>
        </ul>
      </div>
      <div className={styles["footer-group"]}>
        <h2>O Nama</h2>
        <ul className={styles["footer-group__list"]}>
          <li>
            <Link href="/aboutus">Naša Priča</Link>
          </li>
          <li>
            <Link href="/classes">Tečajevi Plesanja</Link>
          </li>
          <li>
            <Link href="/aboutus#student-testimonials">
              Zadovoljni Klijenti
            </Link>
          </li>
        </ul>
      </div>

      <div className={styles["footer-group"]}>
        <h2>Socijalne Mreže</h2>
        <ul className={styles["footer-group__list"]}>
          <li>
            <a href="https://google.com">Instagram</a>
          </li>
          <li>
            <a href="https://google.com">Facebook</a>
          </li>
          <li>
            <a href="https://google.com">Youtube</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
