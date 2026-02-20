import React from "react";
import styles from "./Schedule.module.scss";
import { Wrapper } from "../Layout/Wrapper/Wrapper";
import Link from "next/link";

export type DayOfWeek =
  | "Ponedjeljak"
  | "Utorak"
  | "Srijeda"
  | "Četvrtak"
  | "Petak"
  | "Subota"
  | "Nedjelja";

export interface IScheduleClass {
  _key: string;
  className: string;
  level: string;
  slug: string;
  location: string;
  timeStart: string;
  timeEnd: string;
  note?: string;
}

export interface IDaySchedule {
  _key: string;
  day: DayOfWeek;
  classes: IScheduleClass[];
}

export interface IScheduleData {
  _id: string;
  days: IDaySchedule[];
  title?: string;
}

const DUMMY_SCHEDULE_DATA: IScheduleData = {
  _id: "schedule-main",
  days: [
    {
      _key: "day-pon",
      day: "Ponedjeljak",
      classes: [
        {
          _key: "cls-pon-1",
          className: "Tečaj Plesa",
          level: "Početna razina",
          slug: "drustveni-plesovi",
          location: "Magazinska 9a, Zagreb",
          timeStart: "19:00",
          timeEnd: "20:00",
          note: "od 17.2.2025.",
        },
      ],
    },
    {
      _key: "day-uto",
      day: "Utorak",
      classes: [
        {
          _key: "cls-uto-1",
          className: "Dječija grupa",
          level: "Početna Razina",
          slug: "drustveni-plesovi",
          location: "Magazinska 9a, Zagreb",
          timeStart: "19:00",
          timeEnd: "20:30",
        },
      ],
    },
    {
      _key: "day-sri",
      day: "Srijeda",
      classes: [
        {
          _key: "cls-sri-1",
          className: "Tečaj Plesa",
          level: "Početna razina",
          slug: "drustveni-plesovi",
          location: "Magazinska 9a, Zagreb",
          timeStart: "19:00",
          timeEnd: "20:00",
          note: "od 17.2.2025.",
        },
      ],
    },
    {
      _key: "day-cet",
      day: "Četvrtak",
      classes: [
        {
          _key: "cls-cet-1",
          className: "Dječija grupa",
          level: "Početna Razina",
          slug: "drustveni-plesovi",
          location: "Magazinska 9a, Zagreb",
          timeStart: "19:00",
          timeEnd: "20:30",
        },
      ],
    },
    {
      _key: "day-pet",
      day: "Petak",
      classes: [
        {
          _key: "cls-pet-1",
          className: "Dječija grupa",
          level: "Početna Razina",
          slug: "drustveni-plesovi",
          location: "Magazinska 9a, Zagreb",
          timeStart: "11:00",
          timeEnd: "12:30",
        },
      ],
    },
    {
      _key: "day-sub",
      day: "Subota",
      classes: [],
    },
    {
      _key: "day-ned",
      day: "Nedjelja",
      classes: [
        {
          _key: "cls-ned-1",
          className: "Tečaj Plesa",
          level: "Početna razina",
          slug: "drustveni-plesovi",
          location: "Magazinska 9a, Zagreb",
          timeStart: "18:00",
          timeEnd: "20:00",
          note: "od 23.2.2025.",
        },
      ],
    },
  ],
};

// ─── Helpers ──────────────────────────────────────────────────────────────────

const ORDERED_DAYS: DayOfWeek[] = [
  "Ponedjeljak",
  "Utorak",
  "Srijeda",
  "Četvrtak",
  "Petak",
  "Subota",
  "Nedjelja",
];

/** Vraća IDaySchedule za određeni dan; ako dan ne postoji u podacima, vraća prazan dan */
const getDayData = (days: IDaySchedule[], day: DayOfWeek): IDaySchedule => {
  return (
    days.find((d) => d.day === day) ?? {
      _key: `empty-${day}`,
      day,
      classes: [],
    }
  );
};

const sortByTime = (classes: IScheduleClass[]): IScheduleClass[] =>
  [...classes].sort((a, b) => a.timeStart.localeCompare(b.timeStart));

const getMaxClasses = (days: IDaySchedule[]): number =>
  Math.max(...days.map((d) => d.classes.length), 1);

// ─── Sub-components ───────────────────────────────────────────────────────────

interface ClassCellProps {
  lesson: IScheduleClass;
}

const ClassCell: React.FC<ClassCellProps> = ({ lesson }) => (
  <td className={styles["td-value"]}>
    <p className={styles["class-name"]}>
      <Link href={`/classes/${lesson.slug}`}>{lesson.className}</Link>
    </p>
    <p className={styles["class-level"]}>{lesson.level}</p>
    {lesson.note && <p className={styles["class-note"]}>{lesson.note}</p>}
    <time className={styles["time"]}>
      <span>{lesson.timeStart}</span>
      <span className={styles["separator"]}>-</span>
      <span>{lesson.timeEnd}</span>
    </time>
    <address className={styles["address"]}>{lesson.location}</address>
  </td>
);

// ─── Desktop Table ────────────────────────────────────────────────────────────

interface DesktopScheduleTableProps {
  scheduleData: IScheduleData;
}

const DesktopScheduleTable: React.FC<DesktopScheduleTableProps> = ({
  scheduleData,
}) => {
  const orderedDays = ORDERED_DAYS.map((day) =>
    getDayData(scheduleData.days, day),
  );
  const maxRows = getMaxClasses(orderedDays);

  return (
    <table className={styles["desktop-table"]}>
      <thead className={styles["thead"]}>
        <tr>
          {ORDERED_DAYS.map((day) => (
            <th key={day}>{day}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {Array.from({ length: maxRows }).map((_, rowIndex) => (
          <tr key={rowIndex}>
            {orderedDays.map((dayData) => {
              const sorted = sortByTime(dayData.classes);
              const lesson = sorted[rowIndex];
              return lesson ? (
                <ClassCell key={lesson._key} lesson={lesson} />
              ) : (
                <td
                  key={`empty-${dayData._key}-${rowIndex}`}
                  className={styles["empty-td"]}
                />
              );
            })}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

// ─── Mobile Table ─────────────────────────────────────────────────────────────

interface MobileScheduleTableProps {
  scheduleData: IScheduleData;
}

const MobileScheduleTable: React.FC<MobileScheduleTableProps> = ({
  scheduleData,
}) => {
  const daysWithClasses = ORDERED_DAYS.map((day) =>
    getDayData(scheduleData.days, day),
  ).filter((d) => d.classes.length > 0);

  return (
    <div className={styles["mobile-table"]}>
      {daysWithClasses.map((dayData) => (
        <div key={dayData._key} className={styles["table-row"]}>
          <h2 className={styles["day"]}>{dayData.day}</h2>
          <ul className={styles["classes-list"]}>
            {sortByTime(dayData.classes).map((lesson) => (
              <li key={lesson._key} className={styles["lesson"]}>
                <div className={styles["lesson-header"]}>
                  <h3>{lesson.className}</h3>
                  <span className={styles["lesson-level"]}>{lesson.level}</span>
                </div>
                <div className={styles["lesson-details"]}>
                  <time>
                    {lesson.timeStart} – {lesson.timeEnd}
                  </time>
                  {lesson.note && (
                    <span className={styles["class-note"]}>{lesson.note}</span>
                  )}
                  <address>{lesson.location}</address>
                </div>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

// ─── Main Component ───────────────────────────────────────────────────────────
// Props prihvaća scheduleData sa Sanity-a.
// Dok Sanity fetch nije implementiran, koristi DUMMY_SCHEDULE_DATA kao fallback.

interface ScheduleProps {
  scheduleData?: IScheduleData;
  showTitle?: boolean;
}

export const Schedule: React.FC<ScheduleProps> = ({
  scheduleData = DUMMY_SCHEDULE_DATA,
  showTitle = false,
}) => {
  return (
    <Wrapper>
      <div className={styles["schedule"]}>
        {showTitle && scheduleData.title && (
          <h2 className={styles["schedule-title"]}>{scheduleData.title}</h2>
        )}
        <div className={styles["table-container"]}>
          <DesktopScheduleTable scheduleData={scheduleData} />
          <MobileScheduleTable scheduleData={scheduleData} />
        </div>
      </div>
    </Wrapper>
  );
};
