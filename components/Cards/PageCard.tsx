import Image from "next/image";
import React from "react";
import { Button } from "../UI/Button";
import styles from "./PageCard.module.scss";
interface IPageCard {
  title: string;
  subtitle: string;
  imageUrl: string;
  description: string;
  urlPath: string;
}
export const PageCard: React.FC<{ cardData: IPageCard }> = ({ cardData }) => {
  const { title, subtitle, imageUrl, description, urlPath } = cardData;
  return (
    <div className={styles["page-card"]}>
      <header>
        <h2>{title}</h2>
        <p>{subtitle}</p>
      </header>
      <div className={styles["image-container"]}>
        <Image src={imageUrl} alt={title} width={350} height={190} />
      </div>
      <div className={styles["description"]}>
        <p>{description}</p>
      </div>
      <div className={styles["button-container"]}>
        <Button urlPath={urlPath}>Saznaj Više</Button>
      </div>
    </div>
  );
};
