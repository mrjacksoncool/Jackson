"use client";

import React from "react";
import Image from "next/image";
import styles from "./expsection.module.css";

export default function ExpSection() {
  const tags = ['UI', 'Onboarding', 'UX', 'React', 'Next.js'];
  return (
    <>
      {/* <div className={styles.expcontainer}>
        <h1>
          Experience
        </h1>
        <a href="" target="_blank" rel="noopener noreferrer">
          <div className={styles.JobContainer}>
            <div className={styles.JCleft}>
              <Image
                priority={true}
                src="/images/show.png"
                width={200}
                height={100}
                alt="Picture of the author"
                className={styles.CardImage}
              />
            </div>
            <div className={styles.JCright}>
              <div className={styles.CardTitle}>
                <span>Jab Food</span>
              </div>
              <div className={styles.CardDescription}>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipiscing elit. Consectetur adipiscing elit quisque faucibus ex sapien vitae. Ex sapien vitae pellentesque sem placerat in id. Placerat in id cursus mi pretium tellus duis. Pretium tellus duis convallis tempus leo eu aenean.
                </p>
              </div>
              <div className={styles.tags}>
                {tags.map(tag => (
                  <div key={tag} className={styles.tag}>
                    {tag}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </a>
      </div> */}
      <div className={styles.expcontainer}>
        <h1>
          Projects
        </h1>
        <div className={styles.slider}>

          {/* <a href="#slide-1">1</a>
          <a href="#slide-2">2</a>
          <a href="#slide-3">3</a>
          <a href="#slide-4">4</a>
          <a href="#slide-5">5</a> */}

          <div className={styles.slides}>
            <div id="slide-1" className={styles.slide1}>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <div className={styles.slideContainer}>
                  <div className={styles.slideConLeft}>
                    <Image
                      priority={true}
                      src="/images/show.png"
                      width={300}
                      height={150}
                      alt="Screenshot of front page"
                      className={styles.slideImage}
                    />
                    <div className={styles.slideTitle}>
                      Jab Food ls
                    </div>
                  </div>
                  <div className={styles.slideConRight}>
                    Fast food web app in Lesotho Lorem ipsum dolor sit amet consectetur adipiscing elit. Consectetur adipiscing
                  </div>
                  <div className={styles.slideConTags}>
                    {tags.map(tag => (
                      <div key={tag} className={styles.tag}>
                        {tag}
                      </div>
                    ))}
                  </div>
                </div>
              </a>
            </div>
            <div id="slide-2" className={styles.slide2}>
              <a href="https://github.com/JesseCesar/DIOAN-WEBSITE" target="_blank" rel="noopener noreferrer">
                <div className={styles.slideContainer}>
                  <div className={styles.slideConLeft}>
                    <Image
                      priority={true}
                      src="/images/show-2.png"
                      width={300}
                      height={150}
                      alt="Screenshot of front page"
                      className={styles.slideImage}
                    />
                    <div className={styles.slideTitle}>
                      DIOAN
                    </div>
                  </div>
                  <div className={styles.slideConRight}>
                    Description Lorem ipsum dolor sit amet consectetur adipiscing elit. Consectetur adipiscing
                  </div>
                  <div className={styles.slideConTags}>
                    {tags.map(tag => (
                      <div key={tag} className={styles.tag}>
                        {tag}
                      </div>
                    ))}
                  </div>
                </div>
              </a>
            </div>
            <div id="slide-3" className={styles.slide3}>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <div className={styles.slideContainer}>
                  <div className={styles.slideConLeft}>
                    Title
                  </div>
                  <div className={styles.slideConRight}>
                    Description
                  </div>
                  <div className={styles.slideConTags}>
                    Tags
                  </div>
                </div>
              </a>
            </div>
            <div id="slide-4" className={styles.slide4}>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <div className={styles.slideContainer}>
                  <div className={styles.slideConLeft}>
                    Title
                  </div>
                  <div className={styles.slideConRight}>
                    Description
                  </div>
                  <div className={styles.slideConTags}>
                    Tags
                  </div>
                </div>
              </a>
            </div>
            <div id="slide-5" className={styles.slide5}>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <div className={styles.slideContainer}>
                  <div className={styles.slideConLeft}>
                    Title
                  </div>
                  <div className={styles.slideConRight}>
                    Description
                  </div>
                  <div className={styles.slideConTags}>
                    Tags
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
