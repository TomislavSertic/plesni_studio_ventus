import Image from "next/image";
import React, { useState } from "react";
import { IDances } from "../../../types/sanity-types";
import { RoundCard } from "../../Cards/RoundCard";
import { Wrapper } from "../../Layout/Wrapper/Wrapper";
import OURCLASSES from "./../../../StaticData/OURCLASSES.json";
import styles from "./OurClasses.module.scss";
export const OurClasses: React.FC<{ dances: IDances[] }> = ({ dances }) => {
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
            <h1>Istaknute Grupe i Plesovi</h1>
            <p>Za svakog ponešto</p>
          </header>
        </div>
        <div className={styles["cards-container"]}>
          {dances &&
            dances.map((danceClass) => {
              return <RoundCard key={danceClass._id} cardData={danceClass} />;
            })}
        </div>
      </Wrapper>
    </div>
  );
};
