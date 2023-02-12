import Image from "next/image";
import React from "react";
import styles from "./InstructorCard.module.scss";

import { IInstructorData } from "../../types/general";
import { PlusIcon } from "../Icons/PlusIcon";
export const InstructorCard: React.FC<{ instructorData: IInstructorData }> = ({
  instructorData,
}) => {
  const { image, title, name, description, socials } = instructorData;
  const renderSocialIcons = (social: { name: string; url: string }) => {
    if (social.name.toLowerCase() === "facebook") {
      return (
        <a href={social.url} target="_blank" rel="noreferrer">
          <Image
            src="/icons/fb.png"
            alt="facebook icon"
            width={24}
            height={24}
          />
        </a>
      );
    }
    if (social.name.toLowerCase() === "instagram") {
      return (
        <a href={social.url} target="_blank" rel="noreferrer">
          <Image
            src="/icons/ig.png"
            alt="instagram icon"
            width={24}
            height={24}
          />
        </a>
      );
    }
    if (social.name.toLowerCase() === "youtube") {
      return (
        <a href={social.url} target="_blank" rel="noreferrer">
          <Image
            src="/icons/yt.png"
            alt="youtube icon"
            width={24}
            height={24}
          />
        </a>
      );
    }
    return <></>;
  };
  return (
    <div className={styles["instructor-card"]}>
      <div className={styles["image-container"]}>
        <span className={styles["plus-icon"]}>
          <PlusIcon width={24} height={24} />
        </span>
        <Image src={image} alt={name} width={200} height={200} />
      </div>
      <p className={styles["name"]}>{name}</p>
      <p className={styles["title"]}>{title}</p>
      <div className={styles["socials"]}>
        {socials.map((social) => {
          return (
            <span key={social.name + Math.random()}>
              {renderSocialIcons(social)}
            </span>
          );
        })}
      </div>
      <div className={styles["description"]}>
        <p>{description}</p>
      </div>
    </div>
  );
};
