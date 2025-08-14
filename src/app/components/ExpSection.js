"use client";

import React from "react";
import Image from "next/image";
import styles from "./expsection.module.css";

export default function ExpSection() {
  const tags = ['UI', 'Onboarding', 'UX', 'React', 'Next.js'];
  // const cards = [{ id: 1, title: "Card 1", content: "This is card 1" },
  // { id: 2, title: "Card 2", content: "This is card 2" },
  // { id: 3, title: "Card 3", content: "This is card 3" },
  // ]
  return (
    <>
    {/* <div className={styles.swipecontainer}>
      {cards.map((card => (
        <div key={card.id} className={styles.swipecard}>
          <h2>{card.title}</h2>
          <p>{card.content}</p>
        </div>
      )))}
    </div> */}
      <div className={styles.expcontainer}>
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
      </div>
    </>
  )
}
