import React from "react";
import styles from "./SingleClassContent.module.scss";
import { IDances } from "../../types/sanity-types";
import Image from "next/image";
import { InfoBox } from "../Shared/InfoBox/InfoBox";
import { urlFor } from "../../lib/sanity.client";
import { CustomPortableTextComponents } from "../sanity/CustomPortableTextComponents";
import { PortableText } from "@portabletext/react";
import { InfoBoxItem } from "../Shared/InfoBox/InfoBoxItem";
export const SingleClassContent: React.FC<{ dance: IDances }> = ({ dance }) => {
  const {
    name,
    slug,
    teaching,
    image,
    teachingOptions,
    categories,
    _id,
    body,
  } = dance;
  return (
    <div className={styles["dance-content"]}>
      <section className={styles["upper-section"]}>
        <div className={styles["image-container"]}>
          <Image
            src={urlFor(image).url()}
            alt={name}
            width={800}
            height={600}
          />
        </div>
        <div className={styles["info-container"]}>
          <InfoBox title="Detalji">
            <InfoBoxItem title="Predajemo">
              {teaching ? "Da" : "Ne"}
            </InfoBoxItem>
            <InfoBoxItem title="Načini Predavanja">
              <>
                {teachingOptions &&
                  teachingOptions.map((option) => {
                    return (
                      <p className={styles["dance-class"]} key={option}>
                        {option}
                      </p>
                    );
                  })}
              </>
            </InfoBoxItem>
          </InfoBox>
        </div>
      </section>
      <section className={styles["blog"]}>
        <PortableText
          components={CustomPortableTextComponents}
          value={dance.body}
        />
      </section>
    </div>
  );
};
