import Link from "next/link";
import React from "react";
import { Wrapper } from "../Layout/Wrapper/Wrapper";
import styles from "./PriceList.module.scss";
export const PriceList = () => {
  return (
    <Wrapper>
      <div className={styles["price-list"]}>
        <div className={styles["anchor"]} id="price-list"></div>
        <h1 className={styles["title"]}>Cjenik Usluga</h1>
        <div className={styles["list"]}>
          <div className={styles["list-title"]}>
            <h2>Grupe</h2>
          </div>
          <div className={styles["list-item"]}>
            <span className={styles["item-title"]}>
              Djeca - po grupi - mjesečna članarina
            </span>
            <span className={styles["item-price"]}>€ 40 / kn 301.38</span>
          </div>
          <div className={styles["list-item"]}>
            <span className={styles["item-title"]}>
              Odrasli - po grupi - mjesečna članarina
            </span>
            <span className={styles["item-price"]}>€ 40 / kn 301.38</span>
          </div>
          <div className={styles["list-title"]}>
            <h2>Privatni Sati</h2>
          </div>
          <div className={styles["list-item"]}>
            <span className={styles["item-title"]}>1h</span>
            <span className={styles["item-price"]}>€ 27 / kn 203.43</span>
          </div>
          <div className={styles["list-item"]}>
            <span className={styles["item-title"]}>6h + 1h GRATIS</span>
            <span className={styles["item-price"]}>€ 162 / kn 1220.59</span>
          </div>
          <div className={styles["list-item"]}>
            <span className={styles["item-title"]}>10h + 2h GRATIS</span>
            <span className={styles["item-price"]}>€ 270 / kn 2034.32</span>
          </div>
          <div className={styles["list-item"]}>
            <span className={styles["item-title"]}>
              20h + 5h GRATIS (POKLON besplatna mjesečna grupa)
            </span>
            <span className={styles["item-price"]}>€ 540 / kn 4068.63</span>
          </div>
          <p className={styles["info-text"]}>
            * <Link href="/schedule#free-lesson">Prijavom </Link>
            ostvarite besplatna prva dva treninga u grupi po želji
          </p>
        </div>
      </div>
    </Wrapper>
  );
};
