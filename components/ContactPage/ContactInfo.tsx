import React from "react";
import Image from "next/image";
import styles from "./ContactInfo.module.scss";
import { Wrapper } from "../Layout/Wrapper/Wrapper";

export const ContactInfo = () => {
  return (
    <Wrapper>
      <section className={styles["contact-info"]}>
        <div className={styles["intro-text"]}>
          <h1>Kontaktirajte Nas</h1>
          <p>
            Ako imate pitanja ili želite saznati više o našim uslugama, slobodno
            nas kontaktirajte.
          </p>
          <p>
            Korištenjem obrasca za kontakt ili poštom na našu e-mail adresu, mi
            ćemo odgovoriti u najkraćem mogućem roku. Možete nas također
            kontaktirati telefonskim pozivom.
          </p>
          <p>
            {" "}
            Radujemo se vašem pozivu ili poruci i stojimo vam na raspolaganju da
            odgovorimo na sva vaša pitanja.
          </p>
        </div>
        <div className={styles["information-container"]}>
          <h2>Plesni Studio Ventus j.d.o.o.</h2>
          <ul className={styles["information-list"]}>
            <li className={styles["contact-item"]}>
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
            </li>
            <li>
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
                <a href="tel:+385914455915">+385914455915</a>
              </p>
            </li>
          </ul>
        </div>
      </section>
    </Wrapper>
  );
};
