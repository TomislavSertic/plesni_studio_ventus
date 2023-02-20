import React from "react";
import Image from "next/image";
import styles from "./RoundCard.module.scss";
import { PlusIcon } from "../Icons/PlusIcon";
import { Button } from "../UI/Button";
import { useRouter } from "next/router";
import { IDances } from "../../types/sanity-types";
import { urlFor } from "../../lib/sanity.client";
interface IRoundCard {
  cardData: {
    title: string;
    imgPath: string;
    slug: string;
  };
}
export const RoundCard: React.FC<{ cardData: IDances }> = ({ cardData }) => {
  const { name, image, slug } = cardData;
  const router = useRouter();
  const handleCardClick = () => {
    router.push(`/classes/${slug.current}`);
  };
  return (
    <div className={styles["round-card"]} onClick={handleCardClick}>
      <Image
        className={styles["card-image"]}
        src={urlFor(image).url()}
        width={300}
        height={300}
        alt={name}
      />
      <div className={styles["card-body"]}>
        <span className={styles["plus-icon"]}>
          <PlusIcon width={32} height={32} />
        </span>
      </div>
      <div className={styles["button-container"]}>
        <Button urlPath={`/classes/${slug.current}`}>{name}</Button>
      </div>
    </div>
  );
};
