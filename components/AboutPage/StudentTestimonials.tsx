import React from "react";
import { Wrapper } from "../Layout/Wrapper/Wrapper";
import styles from "./StudentTestimonials.module.scss";
import TESTIMONIALS from "./../../StaticData/TESTIMONIALS.json";
import Image from "next/image";
export const StudentTestimonials = () => {
  return (
    <Wrapper>
      <div
        className={styles["testimonials-anchor"]}
        id="student-testimonials"
      ></div>
      <div className={styles["student-testimonials"]}>
        <div className={styles["header"]}>
          <h1>Izjave polaznika</h1>
          <h4>Što su za nas rekli</h4>
        </div>
        <div className={styles["testimonials-wrapper"]}>
          {TESTIMONIALS.map((data) => {
            const { testimonial, name, image, danceType } = data;
            return (
              <div className={styles["testimonial"]} key={name + danceType}>
                <span className={styles["quote"]}>&quot;</span>
                <div className={styles["content"]}>{testimonial}</div>
                <div className={styles["author"]}>
                  <div className={styles["info"]}>
                    <h3 className={styles["name"]}>{name}</h3>
                    <p className={styles["class"]}>{danceType}</p>
                  </div>
                  <div className={styles["portrait"]}>
                    <Image alt={name} width={60} height={60} src={image} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Wrapper>
  );
};
