"use client";

import styles from "./herosection.module.css";
import Image from "next/image";
import {
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaGithub
} from 'react-icons/fa';

export default function HeroSection() {
  return (
    <>
      <div className={styles.Herocontainer}>
        <div className={styles.Leftcontainer}>
          <div className={styles.Textcontainer}>
            <h1 className={styles.waveText}>
              <span>M</span>
              <span>o</span>
              <span>j</span>
              <span>e</span>
              <span>l</span>
              <span>a</span>
            </h1>
          </div>
          <div className={styles.Titlecontainer}>
            <h2>Front End Developer</h2>
          </div>
          <div className={styles.Linkscontainer}>
            <a href="https://twitter.com/mojeladev" className={`${styles.sociallink} ${styles.twitter}`} target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
            <a href="https://instagram.com/mojelaratsita" className={`${styles.sociallink} ${styles.instagram}`} target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href="https://linkedin.com/in/mojelaratsita" className={`${styles.sociallink} ${styles.linkedin}`} target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn />
            </a>
            <a href="https://github.com/mrjacksoncool/mrjacksoncool/" className={`${styles.sociallink} ${styles.github}`} target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a >
          </div >
        </div >
        <div className={styles.Imagecontainer}>
          <div className={styles.Imagewrapper}>
            <Image
              priority={false}
              className={styles.HeroImage}
              width={400}
              height={400}
              src="/images/HeroP.jpg"
              alt="Hero Image"
            />
          </div>
        </div>
      </div >
      <div className={styles.SImagecontainer}>
        <div className={styles.SImagewrapper}>
          <Image
            priority={false}
            className={styles.SHeroImage}
            width={500}
            height={500}
            src="/images/HeroP.jpg"
            alt="Hero Image"
          />
        </div>
      </div>
    </>
  );
};
