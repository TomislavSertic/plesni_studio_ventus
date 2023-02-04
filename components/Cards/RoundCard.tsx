import React from "react";
import Image from "next/image";
import styles from "./RoundCard.module.scss";
import { PlusIcon } from "../Icons/PlusIcon";
import { Button } from "../UI/Button";
import { useRouter } from "next/router";
interface IRoundCard {
  cardData: {
    title: string;
    imgPath: string;
    slug: string;
  };
}
export const RoundCard: React.FC<IRoundCard> = ({ cardData }) => {
  const { title, imgPath, slug } = cardData;
  const router = useRouter();
  const handleCardClick = () => {
    router.push(`/classes/${slug}`);
  };
  return (
    <div className={styles["round-card"]} onClick={handleCardClick}>
      <Image
        className={styles["card-image"]}
        src={imgPath}
        width={300}
        height={300}
        alt={title}
      />
      <div className={styles["card-body"]}>
        <span className={styles["plus-icon"]}>
          <PlusIcon width={32} height={32} />
        </span>
      </div>
      <div className={styles["button-container"]}>
        <Button urlPath={`/classes/${slug}`}>{title}</Button>
      </div>
    </div>
  );
};
