import React from "react";
import { Wrapper } from "../Layout/Wrapper/Wrapper";
import styles from "./OurTeachers.module.scss";
import INSTRUCTORS from "./../../StaticData/INSTRUCTORS.json";
import { InstructorCard } from "../Cards/InstructorCard";
import { IInstructors } from "../../types/sanity-types";
export const OurTeachers: React.FC<{ instructors: IInstructors[] }> = ({
  instructors,
}) => {
  return (
    <div className={styles["our-teachers"]}>
      <Wrapper>
        <div className={styles["header"]}>
          <h1>Instruktori</h1>
          <h4>Iskustvo - Znanje - Strast</h4>
        </div>
        {instructors && (
          <div className={styles["cards-list"]}>
            {instructors.map((instructor) => {
              return (
                <InstructorCard key={instructor.name} instructor={instructor} />
              );
            })}
          </div>
        )}
      </Wrapper>
    </div>
  );
};
