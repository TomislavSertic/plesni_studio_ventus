import React from "react";
import { PageCard } from "../Cards/PageCard";
import { Wrapper } from "../Layout/Wrapper/Wrapper";
import styles from "./MiddleCards.module.scss";
const CARDSDATA = [
  {
    id: 0,
    title: "Naučite Plesati",
    subtitle: "Izrazite i oslobodite sebe",
    description:
      "Plesanje je koristan i zabavan način za održavanje zdravlja i dobrobiti.Plesanje također pruža priliku za druženje i socijalizaciju, što može pomoći u jačanju veza s drugim ljudima i jačanju samopouzdanja",
    urlPath: "/classes",
    imageUrl: "/images/learntodance.webp",
  },
  {
    id: 1,
    title: "O Našem Studiu",
    subtitle: "Tko smo mi",
    description:
      "Plesni Studio Ventus je mjesto gdje ljudi dolaze kako bi naučili plesati i razvili svoje plesne sposobnosti. Instruktori plesa takodjer pružaju personalizirane lekcije i podršku svakom polazniku.",
    urlPath: "/aboutus",
    imageUrl: "/images/aboutus-card.jpeg",
  },
  {
    id: 2,
    title: "Ispovjesti Klijenata",
    subtitle: "Riječi naših polaznika",
    description:
      "Naši polaznici su vrlo zadovoljni. Izdvojili smo par lijepih rečenica i od njih.",
    urlPath: "/aboutus#student-testimonials",
    imageUrl: "/images/client-review-card.jpeg",
  },
];
export const MiddleCards = () => {
  return (
    <Wrapper>
      <section className={styles["middle-cards"]}>
        <div className={styles["cards-list"]}>
          {CARDSDATA.map((item) => {
            return <PageCard key={item.id} cardData={item} />;
          })}
        </div>
      </section>
    </Wrapper>
  );
};
