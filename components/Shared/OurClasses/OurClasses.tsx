import Image from "next/image";
import React, { useState } from "react";
import { RoundCard } from "../../Cards/RoundCard";
import { Wrapper } from "../../Layout/Wrapper/Wrapper";
import OURCLASSES from "./../../../StaticData/OURCLASSES.json";
import styles from "./OurClasses.module.scss";
export const OurClasses = () => {
  const [danceClasses, setDanceClasses] = useState(OURCLASSES);
  return (
    <div className={styles["our-classes"]}>
      <div className={styles["classes-anchor"]} id="our-classes">
        {" "}
      </div>
      {/* <div className={styles["upper-triangle"]}></div> */}
      <Wrapper>
        <div className={styles["content"]}>
          <header className={styles["header"]}>
            <h1>Naši Stilovi Plesa</h1>
            <p>Odeberi svoj stil</p>
          </header>
        </div>
        <div className={styles["cards-container"]}>
          {danceClasses.map((danceClass) => {
            return <RoundCard key={danceClass.id} cardData={danceClass} />;
          })}
        </div>
      </Wrapper>
    </div>
  );
};
