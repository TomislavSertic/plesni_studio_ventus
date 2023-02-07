import React from "react";
import { IEvent } from "../../../types/sanity-types";
import { EventItem } from "./EventItem";
import styles from "./EventsList.module.scss";
export const EventsList: React.FC<{ events: IEvent[] }> = ({ events }) => {
  console.log(events);

  return (
    <ul className={styles["events-list"]}>
      {events.map((event) => {
        return <EventItem key={event._id} event={event} />;
      })}
    </ul>
  );
};
