import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./EventHeader.module.scss";
import { urlFor } from "../../lib/sanity.client";
import { IEvent } from "../../types/sanity-types";
import { Wrapper } from "../Layout/Wrapper/Wrapper";
import { readableDate } from "../../lib/helper-functions";

export const EventHeader: React.FC<{ event: IEvent }> = ({ event }) => {
  const { title, mainImage, eventStart, eventEnd } = event;
  console.log(event);
  const startDate = readableDate(eventStart);
  const endDate = readableDate(eventEnd);
  const eventStartTime = new Date(eventStart).toLocaleTimeString("en-GB");
  const eventEndTime = new Date(eventEnd).toLocaleTimeString("en-GB");
  return (
    <div className={styles["event-header"]}>
      <Link href="/events" className={styles["return-link"]}>
        {"<<"} All Events
      </Link>
      <h1 className={styles["title"]}>{title}</h1>
      <div className={styles["event-date"]}>
        <time>
          {startDate} <span className={styles["primary-color"]}>@</span>{" "}
          {eventStartTime}{" "}
        </time>
        <span className={styles.separator}>-</span>
        <time>
          {endDate} <span className={styles["primary-color"]}>@</span>{" "}
          {eventEndTime}
        </time>
      </div>
      <div className={styles["image-container"]}>
        <Image
          src={urlFor(mainImage).url()}
          alt={title}
          width={800}
          height={800}
        />
      </div>
    </div>
  );
};
