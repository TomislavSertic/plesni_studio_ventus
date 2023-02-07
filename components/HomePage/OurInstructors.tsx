import React from "react";
import { Wrapper } from "../Layout/Wrapper/Wrapper";
import styles from "./OurInstructors.module.scss";
export const OurInstructors = () => {
  return (
    <div className={styles["our-instructors"]}>
      <Wrapper>
        <div className={styles["content"]}>
          <h1>Naši Instruktori</h1>
          <div>
            <div className="content">
              <p>Little Bird</p>
              <h1 className={styles["ime"]}>Korina</h1>
              <h1 className={styles["prezime"]}>Lopez</h1>
            </div>
            <div className="content">
              <p>Dancing Maniac</p>
              <h1 className={styles["ime"]}>Domagoj </h1>
              <h1 className={styles["prezime"]}>Sertić</h1>
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};
