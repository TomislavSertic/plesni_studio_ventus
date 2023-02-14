import Link from "next/link";
import React from "react";
import { readableDate } from "../../lib/helper-functions";
import { IEvent } from "../../types/sanity-types";
import styles from "./EventDetails.module.scss";
export const EventDetails: React.FC<{ event: IEvent }> = ({ event }) => {
  const {
    eventStart,
    eventEnd,
    eventPrice,
    eventVenue,
    eventVenueAddress,
    categories,
    organizator,
  } = event;
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
            {startDate} <span className={styles["color-primary"]}>@</span>
            {eventStartTime}
          </time>
        </div>
        <div className={styles["item"]}>
          <p className={styles["item__title"]}>Kraj</p>
          <time className={styles["item__content"]}>
            {endDate} <span className={styles["color-primary"]}>@</span>
            {eventEndTime}
          </time>
        </div>
        <div className={styles["item"]}>
          <p className={styles["item__title"]}>Cijena:</p>
          {eventPrice === 0 ? (
            <p className={styles["item__content"]}>
              <span className={styles["color-primary"]}>Besplatno</span>
            </p>
          ) : (
            <p className={styles["item__content"]}>{eventPrice} €</p>
          )}
        </div>
        <div className={styles["item"]}>
          <p className={styles["item__title"]}>Kategorije</p>
          <div className={styles["item__tags"]}>
            {categories.map((category) => {
              return (
                <span key={category._id} className={styles["tag"]}>
                  <span className={styles["color-primary"]}>#</span>
                  {category.title}
                </span>
              );
            })}
          </div>
        </div>
      </div>
      <div className={styles["details-box"]}>
        <h1 className={styles["box-title"]}>Organizator</h1>
        <div className={styles["item"]}>
          <span className={styles["color-primary"]}>
            <Link
              href={`/instructors/${organizator.slug.current}`}
              className={styles["item__link"]}
            >
              {organizator.name} {organizator.surname}
            </Link>
          </span>
        </div>
        <div className={styles["item"]}>
          <p className={styles["item__title"]}>Telefon</p>
          <a
            href={`tel:${organizator.phoneNumber}`}
            className={styles["item__content"]}
          >
            {organizator.phoneNumber}
          </a>
        </div>
        <div className={styles["item"]}>
          <p className={styles["item__title"]}>Email</p>

          <a
            href={`mailto:${organizator.email}`}
            className={styles["item__content"]}
          >
            {organizator.email}
          </a>
        </div>
      </div>
      <div className={styles["details-box"]}>
        <h1 className={styles["box-title"]}>Lokacija</h1>
        <div className={styles["item"]}>
          <p className={styles["item__title"]}>Naziv</p>

          <p className={styles["item__content"]}>{eventVenue}</p>
        </div>
        <div className={styles["item"]}>
          <p className={styles["item__title"]}>Adresa</p>

          <p className={styles["item__content"]}>{eventVenueAddress}</p>
        </div>
      </div>
    </div>
  );
};
