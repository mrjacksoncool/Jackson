"use client";

import styles from "./aboutsection.module.css";

export default function AboutSection() {
  return (
    <>
      <div className={styles.AboutContainer}>
        <div className={styles.InfoContainer}>
          <p>
            I&apos;m a developer with an interest in creating intuitive, accessible and responsive user interfaces. My favourite work involves
            creating interfaces from designs that enhance user experience and deliver pleasant interactions that are consistent, robust and performant.
            <br />
            <br />
            I currently spend my time constantly learning and mastering modern frameworks and libraries like React, Next.js, and Tailwind CSS.
            As a <a href="https://www.lewagon.com/" target="_blank" rel="noopener noreferrer" className={styles.Linkto}>Wagoner</a>, I have a solid foundation in web development and a great appreciation for collaborative work.
            I am constantly seeking to improve my skills and have earned certifications that reflect my dedication to the craft, from <a href="https://freecodecamp.org/certification/mojela03/responsive-web-design" target="_blank" rel="noopener noreferrer" className={styles.Linkto}>Freecodecamp</a> and <a href="https://www.hackerrank.com/certificates/3d41105e3b69" target="_blank" rel="noopener noreferrer" className={styles.Linkto}>HackerRank</a>.
            <br />
            <br />
            In my free time, I enjoy exploring new coffee shops, and reading about the latest trends in tech on <a href="https://daily.dev/" target="_blank" rel="noopener noreferrer" className={styles.Linkto}>Daily.dev</a>.
          </p>
        </div>
      </div>
    </>
  )
}
