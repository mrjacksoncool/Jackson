"use client";

import styles from "./worksection.module.css";
import { MdArrowOutward } from "react-icons/md";


export default function WorkSection() {
  function Not() {
    alert("Downloading my resume?")
  }
  return (
    <>
      <div className={styles.WorkContainer}>
        <h1>
          Work
        </h1>
        <a href="" target="_blank" rel="noopener noreferrer">
          <div className={styles.ProjectContainer}>
            <div className={styles.PCleft}>
              <span className={styles.date}>
                2023-2024
              </span>
            </div>
            <div className={styles.WorkDetails}>
              <div>
                <span>
                  Title
                </span>
              </div>
              <div>
                <p>
                  Description
                </p>
              </div>
            </div>
          </div>
        </a>
        <span className={styles.resume}>
          <a href="/resume.pdf" download={"Mojela's resume.pdf"} className={styles.resumeLink} onClick={() => Not()}>
            Download Resume <MdArrowOutward />
          </a>
        </span>
      </div>
    </>
  );
}
