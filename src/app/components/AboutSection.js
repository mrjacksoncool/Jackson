"use client";

import styles from "./aboutsection.module.css";

export default function AboutSection() {
  return (
    <>
      <div className={styles.AboutContainer}>
        <div className={styles.InfoContainer}>
          <p>
            I am a developer with a keen interest in creating
            accesible, intuitive and responsive web applications. My journey in web development
            has equipped me with the skills to build user-friendly interfaces and
            optimize performance.Lorem ipsum dolor<a href="" target="_blank" rel="noopener noreferrer" className={styles.Linkto}>Le wagon</a> sit amet consectetur adipiscing elit. Consec
            tetur adipiscing elit quisque faucibus sapien vitae. Ex sapien vitae pellentesque sem p
            lacerat in id. Placerat in id cursus mi pretium tellus duis. Pretium tellus duis convallis
            tempus leo eu aenean.
          </p>
        </div>
      </div>
    </>
  )
}
