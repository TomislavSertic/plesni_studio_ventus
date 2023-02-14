import React from "react";
import styles from "./EventBody.module.scss";
import { IEvent } from "../../types/sanity-types";
import { Wrapper } from "../Layout/Wrapper/Wrapper";
import { PortableText } from "@portabletext/react";
import { CustomPortableTextComponents } from "../sanity/CustomPortableTextComponents";

export const EventBody: React.FC<{ event: IEvent }> = ({ event }) => {
  return (
    <div className={styles["event-body"]}>
      <PortableText
        value={event.body}
        components={CustomPortableTextComponents}
      />
    </div>
  );
};
