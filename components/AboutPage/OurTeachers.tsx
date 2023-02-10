import React from "react";
import { Wrapper } from "../Layout/Wrapper/Wrapper";
import styles from "./OurTeachers.module.scss";
import INSTRUCTORS from "./../../StaticData/INSTRUCTORS.json";
import { InstructorCard } from "../Cards/InstructorCard";
export const OurTeachers = () => {
  return (
    <div className={styles["our-teachers"]}>
      <Wrapper>
        <div className={styles["header"]}>
          <h1>Instruktori</h1>
          <h4>Vrhunski Stručnjaci</h4>
        </div>
        <div className={styles["cards-list"]}>
          {INSTRUCTORS.map((instructor) => {
            return (
              <InstructorCard
                key={instructor.name}
                instructorData={instructor}
              />
            );
          })}
        </div>
      </Wrapper>
    </div>
  );
};
