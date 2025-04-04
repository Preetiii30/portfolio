import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hey People, I'm Preeti Mishra</h1>
        <p className={styles.description}>
          I'm a frontend developer who loves turning ideas into interactive web experiences!
        </p>
        <a href="https://drive.google.com/file/d/1m6X9Z6VXys-4KqWHOE7QjyaLnMjlS2Q0/view?usp=sharing" className={styles.contactBtn}>
          Download Resume
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
