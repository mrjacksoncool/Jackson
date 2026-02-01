"use client";

import styles from "./worksection.module.css";
import { MdArrowOutward } from "react-icons/md";
import Image from "next/image";
import React from "react";


export default function WorkSection() {
  function Not() {
    alert("Downloading my resume?")
  }
  const tags = ['UI', 'Onboarding', 'UX', 'React', 'Next.js'];
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

//  <div className={styles.slider}>

//           {/* <a href="#slide-1">1</a>
//           <a href="#slide-2">2</a>
//           <a href="#slide-3">3</a>
//           <a href="#slide-4">4</a>
//           <a href="#slide-5">5</a> */}

//           <div className={styles.slides}>
//             <div id="slide-1" className={styles.slide1}>
//               <a href="#" target="_blank" rel="noopener noreferrer">
//                 <div className={styles.slideContainer}>
//                   <div className={styles.slideConLeft}>
//                     <Image
//                       priority={true}
//                       src="/images/show.png"
//                       width={300}
//                       height={150}
//                       alt="Picture of the author"
//                       className={styles.slideImage}
//                     />
//                   <div className={styles.slideTitle}>
//                     Jab Food ls
//                   </div>
//                   </div>
//                   <div className={styles.slideConRight}>
//                     Fast food web app in Lesotho Lorem ipsum dolor sit amet consectetur adipiscing elit. Consectetur adipiscing
//                   </div>
//                   <div className={styles.slideConTags}>
//                     {tags.map(tag => (
//                       <div key={tag} className={styles.tag}>
//                         {tag}
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               </a>
//             </div>
//             <div id="slide-2" className={styles.slide2}>
//               <a href="#" target="_blank" rel="noopener noreferrer">
//                 <div className={styles.slideContainer}>
//                   <div className={styles.slideConLeft}>
//                     Title
//                   </div>
//                   <div className={styles.slideConRight}>
//                     Description
//                   </div>
//                   <div className={styles.slideConTags}>
//                     Tags
//                   </div>
//                 </div>
//               </a>
//             </div>
//             <div id="slide-3" className={styles.slide3}>
//               <a href="#" target="_blank" rel="noopener noreferrer">
//                 <div className={styles.slideContainer}>
//                   <div className={styles.slideConLeft}>
//                     Title
//                   </div>
//                   <div className={styles.slideConRight}>
//                     Description
//                   </div>
//                   <div className={styles.slideConTags}>
//                     Tags
//                   </div>
//                 </div>
//               </a>
//             </div>
//             <div id="slide-4" className={styles.slide4}>
//               <a href="#" target="_blank" rel="noopener noreferrer">
//                 <div className={styles.slideContainer}>
//                   <div className={styles.slideConLeft}>
//                     Title
//                   </div>
//                   <div className={styles.slideConRight}>
//                     Description
//                   </div>
//                   <div className={styles.slideConTags}>
//                     Tags
//                   </div>
//                 </div>
//               </a>
//             </div>
//             <div id="slide-5" className={styles.slide5}>
//               <a href="#" target="_blank" rel="noopener noreferrer">
//                 <div className={styles.slideContainer}>
//                   <div className={styles.slideConLeft}>
//                     Title
//                   </div>
//                   <div className={styles.slideConRight}>
//                     Description
//                   </div>
//                   <div className={styles.slideConTags}>
//                     Tags
//                   </div>
//                 </div>
//               </a>
//             </div>
//           </div>
//         </div>
