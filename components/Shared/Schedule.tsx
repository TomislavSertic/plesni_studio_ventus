import React from "react";
import styles from "./Schedule.module.scss";
import { Wrapper } from "../Layout/Wrapper/Wrapper";
import Link from "next/link";

const SCHEDULE = {
  Ponedjeljak: {
    numberOfClasses: 0,
    classes: [
      null,
      {
        class: "Dječji program 'Starpoint'",
        level: "Početna Razina",
        slug: "drustveni-plesovi",
        location: "Dramalj 47, Hrvatski Narodni Dom",
        timeStart: "16:00",
        timeEnd: "18:00",
      },
      {
        class: "Dječji program 'Starpoint'",
        level: "Početna Razina",
        slug: "drustveni-plesovi",
        location: "Lokvica 2, Novi Vinodolski",
        timeStart: "18:30",
        timeEnd: "20:30",
      },
    ],
  },
  Utorak: {
    numberOfClasses: 0,
    classes: [
      null,
      null,
      {
        class: "Dječji program 'Starpoint'",
        level: "Početna Razina",
        slug: "drustveni-plesovi",
        location: "Magazinska 9a,Zagreb",
        timeStart: "17:30",
        timeEnd: "19:00",
      },
    ],
  },
  Srijeda: {
    numberOfClasses: 0,
    classes: [
      null,
      {
        class: "Dječji program 'Starpoint'",
        level: "Početna Razina",
        slug: "drustveni-plesovi",
        location: "Dramalj 47, Hrvatski Narodni Dom",
        timeStart: "16:00",
        timeEnd: "18:00",
      },
      {
        class: "Dječji program 'Starpoint'",
        level: "Početna Razina",
        slug: "drustveni-plesovi",
        location: "Lokvica 2, Novi Vinodolski",
        timeStart: "18:30",
        timeEnd: "20:30",
      },
    ],
  },
  Četvrtak: {
    numberOfClasses: 0,
    classes: [
      null,
      null,
      {
        class: "Dječji program 'Starpoint'",
        level: "Početna Razina",
        slug: "drustveni-plesovi",
        location: "Magazinska 9a,Zagreb",
        timeStart: "17:30",
        timeEnd: "19:00",
      },
    ],
  },
  Petak: {
    numberOfClasses: 0,
    classes: [
      null,
      null,
      {
        class: "Početni tečaj u parovima",
        level: "Početna Razina",
        slug: "drustveni-plesovi",
        location: "Magazinska 9a,Zagreb",
        timeStart: "17:00",
        timeEnd: "18:30",
      },
      {
        class: "Plesna rekreacija",
        level: "Srednja Razina",
        slug: "drustveni-plesovi",
        location: "Magazinska 9a,Zagreb",
        timeStart: "18:30",
        timeEnd: "20:30",
      },
    ],
  },
  Subota: {
    numberOfClasses: 0,
    classes: [
      {
        class: "Dječji program 'Starpoint'",
        level: "Početna Razina",
        slug: "drustveni-plesovi",
        location: "Magazinska 9a,Zagreb",
        timeStart: "11:00",
        timeEnd: "12:30",
      },
    ],
  },
  Nedjelja: { numberOfClasses: 0, classes: [] },
};
const numberOfTr = (objectData: any) => {
  let numberTr = 0;
  for (let data in objectData) {
    if (objectData[data].classes.length > numberTr) {
      numberTr = objectData[data].classes.length;
    }
  }
  return numberTr;
};
export const Schedule = () => {
  const objectKeys = Object.keys(SCHEDULE) as Array<keyof typeof SCHEDULE>;
  const generateTbody = () => {
    let trs = [];
    for (let i = 0; i < numberOfTr(SCHEDULE); i++) {
      let td = [];
      for (let key of objectKeys) {
        if (SCHEDULE[key].classes[i]) {
          td.push(
            <td key={Math.random()} className={styles["td-value"]}>
              <p className={styles["class-name"]}>
                <Link href={`/classes/${SCHEDULE[key].classes[i]?.slug}`}>
                  {SCHEDULE[key].classes[i]?.class}
                </Link>
              </p>
              <p className={styles["class-level"]}>
                {SCHEDULE[key].classes[i]?.level}
              </p>
              <time className={styles["time"]}>
                <span>{SCHEDULE[key].classes[i]?.timeStart}</span>
                <span className={styles["separator"]}>-</span>
                <span>{SCHEDULE[key].classes[i]?.timeEnd}</span>
              </time>
              <address className={styles["address"]}>
                {SCHEDULE[key].classes[i]?.location}
              </address>
            </td>
          );
        } else {
          td.push(
            <td key={Math.random()} className={styles["empty-td"]}>
              {" "}
            </td>
          );
        }
      }
      trs.push(<tr key={Math.random()}>{td.map((data) => data)}</tr>);
    }
    return (
      <>
        {trs.map((data) => {
          return data;
        })}
      </>
    );
  };

  return (
    <Wrapper>
      <div className={styles["schedule"]}>
        <div className={styles["table-container"]}>
          <table className={styles["desktop-table"]}>
            <thead className={styles["thead"]}>
              <tr>
                {Object.keys(SCHEDULE).map((day) => {
                  return <th key={day}>{day}</th>;
                })}
              </tr>
            </thead>
            <tbody>{generateTbody()}</tbody>
          </table>
          <MobileScheduleTable />
        </div>
      </div>
    </Wrapper>
  );
};

export const MobileScheduleTable = () => {
  const objectKeys = Object.keys(SCHEDULE) as Array<keyof typeof SCHEDULE>;
  const daysWithData = objectKeys.filter((day) => {
    if (SCHEDULE[day].classes.length > 0) {
      return day;
    }
  });

  return (
    <div className={styles["mobile-table"]}>
      {daysWithData.map((day) => {
        return (
          <div key={day} className={styles["table-row"]}>
            <h1 className={styles["day"]}>{day}</h1>
            <ul className={styles["classes-list"]}>
              {SCHEDULE[day].classes.map((lesson) => {
                if (lesson) {
                  return (
                    <li
                      key={lesson.class + Math.random()}
                      className={styles["lesson"]}
                    >
                      <h2>{lesson.class}</h2>
                      <div className="time-address-container">
                        <time>
                          {lesson.timeStart} - {lesson.timeEnd}
                        </time>
                        <address>{lesson.location}</address>
                      </div>
                    </li>
                  );
                } else {
                  return <></>;
                }
              })}
            </ul>
          </div>
        );
      })}
    </div>
  );
};
