import React from "react";
import styles from "./InstructorPageContent.module.scss";
import { IInstructors } from "../../types/sanity-types";
import Image from "next/image";
import { InfoBox } from "../Shared/InfoBox/InfoBox";
import { urlFor } from "../../lib/sanity.client";
import { CustomPortableTextComponents } from "../sanity/CustomPortableTextComponents";
import { PortableText } from "@portabletext/react";
import { InfoBoxItem } from "../Shared/InfoBox/InfoBoxItem";
export const InstructorPageContent: React.FC<{ instructor: IInstructors }> = ({
  instructor,
}) => {
  const { image, knowledge } = instructor;
  return (
    <div className={styles["instructor-content"]}>
      <section className={styles["upper-section"]}>
        <div className={styles["image-container"]}>
          <Image
            src={urlFor(image).url()}
            alt="domagoj sertic"
            width={800}
            height={600}
          />
        </div>
        <div className={styles["info-container"]}>
          <InfoBox title="Detalji">
            <InfoBoxItem title="Profesija">Instruktor Plesa</InfoBoxItem>
            <InfoBoxItem title="Predaje">
              <>
                {knowledge.map((dance) => {
                  return (
                    <p className={styles["dance-class"]} key={dance._id}>
                      {dance.name}
                    </p>
                  );
                })}
              </>
            </InfoBoxItem>
            <InfoBoxItem title="Email">{instructor.email}</InfoBoxItem>
            <InfoBoxItem title="Telefon">{instructor.phoneNumber}</InfoBoxItem>
          </InfoBox>
        </div>
      </section>
      <section className={styles["blog"]}>
        <PortableText
          components={CustomPortableTextComponents}
          value={instructor.bio}
        />
      </section>
    </div>
  );
};
