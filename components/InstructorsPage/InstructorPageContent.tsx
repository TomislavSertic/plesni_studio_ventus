import React from "react";
import styles from "./InstructorPageContent.module.scss";
import { IInstructors } from "../../types/sanity-types";
import Image from "next/image";
import { InfoBox } from "../Shared/InfoBox/InfoBox";
import { urlFor } from "../../lib/sanity.client";
import { CustomPortableTextComponents } from "../sanity/CustomPortableTextComponents";
import { PortableText } from "@portabletext/react";
export const InstructorPageContent: React.FC<{ instructor: IInstructors }> = ({
  instructor,
}) => {
  console.log(instructor);
  return (
    <div className={styles["instructor-content"]}>
      <section className={styles["upper-section"]}>
        <div className={styles["image-container"]}>
          <Image
            src={urlFor(instructor.image).url()}
            alt="domagoj sertic"
            width={800}
            height={600}
          />
        </div>
        {/* <div className={styles["info-container"]}>
          <InfoBox title="Profil Detalji">
            <li>
              <h4>Iskustvo</h4> <p>3 godine</p>
            </li>
          </InfoBox>
          <InfoBox title="Osobni Detalji">a</InfoBox>
        </div> */}
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
