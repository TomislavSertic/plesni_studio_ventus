import Link from "next/link";
import React from "react";
import { IEvent } from "../../../types/sanity-types";
import styles from "./EventItem.module.scss";
export const EventItem: React.FC<{ event: IEvent }> = ({ event }) => {
  const eventDateStart = event.eventStart;
  const eventDateEnd = event.eventEnd;
  const eventStartTime = new Date(eventDateStart).toLocaleTimeString("en-GB");
  const eventStartDate = new Date(eventDateStart).toLocaleDateString("en-us", {
    month: "long",
    year: "numeric",
    day: "2-digit",
  });
  const eventStartMonth = eventStartDate.split(" ")[0];
  const eventStartDay = eventStartDate.split(" ")[1];
  const eventEndTime = new Date(eventDateEnd).toLocaleTimeString("en-GB");
  const eventEndDate = new Date(eventDateEnd).toLocaleDateString("en-us", {
    month: "long",
    year: "numeric",
    day: "2-digit",
  });
  const slug = event.slug.current;
  return (
    <li className={styles["event-item"]}>
      <div className={styles["event-date"]}>
        <p className={styles["month-short"]}>{eventStartMonth.slice(0, 3)}</p>
        <p className={styles["day-big"]}>
          {eventStartDay.slice(0, eventStartDay.length - 1)}
        </p>
      </div>
      <div className={styles["content"]}>
        <div className={styles["end-start-date"]}>
          <time>
            {eventStartDate} @ {eventStartTime}
          </time>
          <span> - </span>
          <time>
            {eventEndDate} @ {eventEndTime}
          </time>
        </div>
        <Link href={`/events/${slug}`}>
          <h1>{event.title}</h1>
        </Link>
      </div>
    </li>
  );
};
