import React from "react";
import styles from "./UpcomingEvents.module.scss";
import { Wrapper } from "../../Layout/Wrapper/Wrapper";
import { GetStaticProps } from "next";
import { client } from "../../../lib/sanity.client";
import { EventsList } from "./EventsList";

export const UpcomingEvents: React.FC<{ events: any }> = ({ events }) => {
  if (!events) {
    return (
      <Wrapper>
        <h1>Loading...</h1>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <section className={styles["upcoming-events"]}>
        <div className={styles.heading}>
          <h2>Nadolazeći Događaji</h2>
          <p>Vrijeme je za ples</p>
        </div>
        <EventsList events={events} />
      </section>
    </Wrapper>
  );
};
