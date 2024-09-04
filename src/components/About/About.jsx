import React from "react";
import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
        <h2 className={styles.title}>About</h2>
        <div className={styles.content} >
        <img src={getImageUrl("about/aboutImage.png")} alt="me siitiing"  className={styles.aboutImage} />
        
        <ul  className={styles.aboutItems}>
            <li className={styles.aboutItem}><img src={getImageUrl("about/cursorIcon.png")} alt="cursor" />
            <div className={styles.aboutItemText}>
                <h1>Frontend Developer</h1>
                <p>I'm Frontend developer with Experience in building 
                    responsive and optimized sites
                </p>
            </div>
            </li>
            <li className={styles.aboutItem}><img src={getImageUrl("about/serverIcon.png")} alt="server" />
            <div className={styles.aboutItemText}>
                <h1>Backend Developer</h1>
                <p>I have  Experience in developing fast and optimized backend system and API's
                  
                </p>
            </div>
            </li>
            <li className={styles.aboutItem}><img src={getImageUrl("about/serverIcon.png")} alt="server" />
            <div className={styles.aboutItemText}>
                <h1>sql Developer</h1>
                <p>I have  Experience in developing database 
                  
                </p>
            </div>
            </li>
        </ul>
        </div>
        
    </section>
  );
};
