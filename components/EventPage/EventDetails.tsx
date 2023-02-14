import React from "react";
import { readableDate } from "../../lib/helper-functions";
import { IEvent } from "../../types/sanity-types";
import styles from "./EventDetails.module.scss";
export const EventDetails: React.FC<{ event: IEvent }> = ({ event }) => {
  const { title, mainImage, eventStart, eventEnd } = event;
  console.log(event);
  const startDate = readableDate(eventStart);
  const endDate = readableDate(eventEnd);
  const eventStartTime = new Date(eventStart).toLocaleTimeString("en-GB");
  const eventEndTime = new Date(eventEnd).toLocaleTimeString("en-GB");
  return (
    <div className={styles["event-details"]}>
      <div className={styles["details-box"]}>
        <h1 className={styles["box-title"]}>DETALJI</h1>
        <div className={styles["item"]}>
          <p className={styles["item__title"]}>Početak</p>
          <time className={styles["item__content"]}>
            {startDate} @{eventStartTime}
          </time>
        </div>
        <div className={styles["item"]}>
          <p className={styles["item__title"]}>Kraj</p>
          <time className={styles["item__content"]}>
            {endDate} @{eventEndTime}
          </time>
        </div>
        <div className={styles["item"]}>
          <p className={styles["item__title"]}>Kategorije</p>
          <div className={styles["item__tags"]}></div>
        </div>
      </div>
    </div>
  );
};
