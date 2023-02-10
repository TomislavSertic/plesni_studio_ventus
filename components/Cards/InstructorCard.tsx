import Image from "next/image";
import React from "react";
import styles from "./InstructorCard.module.scss";

import { IInstructorData } from "../../types/general";
export const InstructorCard: React.FC<{ instructorData: IInstructorData }> = ({
  instructorData,
}) => {
  const { image, title, name, description, socials } = instructorData;
  return (
    <div className={styles["instructor-card"]}>
      <div className={styles["image-container"]}>
        <Image src={image} alt={name} width={200} height={200} />
      </div>
      <p className={styles["name"]}>{name}</p>
      <p className={styles["title"]}>{title}</p>
      <div className={styles["socials"]}>
        {socials.map((social) => {
          return <span key={social.name + Math.random()}>{social.name}</span>;
        })}
      </div>
      <div className={styles["description"]}>
        <p>{description}</p>
      </div>
    </div>
  );
};
