import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
              I build visually appealing, user-friendly, and high-performance web interfaces using React.js, JavaScript, HTML, and CSS. If there’s a way to make an app both beautiful and functional, you’ll find me doing just that.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3> Creative Coder with a Design Eye</h3>
              <p>
              To me, frontend development isn’t just about writing code,it’s about designing experiences.
              I love playing around with colors, typography, and interactions to make every website feel intuitive and alive.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>Debugging Enthusiast</h3>
              <p>
              If I’m not coding, I’m probably debugging things I didn’t break or lost in a good book. </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
