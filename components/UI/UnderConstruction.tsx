import Image from "next/image";
import React from "react";
import { Wrapper } from "../Layout/Wrapper/Wrapper";
import styles from "./UnderConstruction.module.scss";
export const UnderConstruction = () => {
  return (
    <Wrapper>
      <div className={styles["image-container"]}>
        <Image
          src="/images/under-construction.png"
          width={1300}
          height={900}
          alt="under construction website"
        />
      </div>
    </Wrapper>
  );
};
