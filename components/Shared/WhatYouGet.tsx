import Image from "next/image";
import React from "react";
import styles from "./WhatYouGet.module.scss";
import { Wrapper } from "../Layout/Wrapper/Wrapper";
export const WhatYouGet = () => {
  return (
    <Wrapper>
      <div className={styles["wyg"]}>
        <div className={styles["image-container"]}>
          <Image
            alt="girl jumping with happines in her eyes"
            src="/images/dance-illustration.webp"
            width={500}
            height={500}
          />
        </div>
        <div className={styles["content"]}>
          <div className={styles["header"]}>
            <h1>Šta dobivate sa upisom u Plesni Studio</h1>
            <p>Prednosti bavljenja plesom</p>
          </div>
          <div className="benefit-list">
            <div className={styles["benefit"]}>
              <div className={styles["icon-container"]}>
                <Image
                  src="/icons/heart-health2.png"
                  alt="hearth icon"
                  width={32}
                  height={32}
                />
              </div>
              <div className={styles["text-container"]}>
                <h4>Zdravo Tijelo & Um</h4>
                <p>
                  Plesanje jača tijelo, podstiče ravnotežu i jača mentalno
                  zdravlje smanjujući stres i povećavajući pozitivne emocije.
                  Ples pruža zabavu i kreativan izlaz za energiju, te jača
                  samopouzdanje.
                </p>
              </div>
            </div>
            <div className={styles["benefit"]}>
              <div className={styles["icon-container"]}>
                <Image
                  src="/icons/music-white.png"
                  alt="music note icon"
                  width={32}
                  height={32}
                />
              </div>
              <div className={styles["text-container"]}>
                <h4>Odlična Muzika & Atmosfera</h4>
                <p>
                  ezaboravno iskustvo zahvaljujući odličnoj muzici i ugodnoj
                  atmosferi. Plesanje uz ritmične i zabavne melodije pruža
                  užitak i opušta, dok prijateljska atmosfera pruža osjećaj
                  sigurnosti i podrške. Ova kombinacija čini mjesto savršenim za
                  opuštanje i učenje novih plesnih koraka.
                </p>
              </div>
            </div>
            <div className={styles["benefit"]}>
              <div className={styles["icon-container"]}>
                <Image
                  src="/icons/people.png"
                  alt="hearth icon"
                  width={32}
                  height={32}
                />
              </div>
              <div className={styles["text-container"]}>
                <h4>Kreativni & Zabavni Ljudi</h4>
                <p>
                  Plesni Studio okuplja kreativne i zabavne ljude.Druženje s
                  ljudima sličnih interesa, stvara se prijateljska i
                  podržavajuća atmosfera koja ohrabruje razvoj plesnih
                  sposobnosti i stjecanje novih iskustava.Konačni rezultat zna
                  rezultirati prijateljstvima koja traju dugo nakon što se
                  završi plesanje.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
