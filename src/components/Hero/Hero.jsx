import React from "react";
import Styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (<section className={Styles.container}>
      <div className={Styles.content}>
        <h1 className={Styles.title}>Hi,I'm Ignatius anton</h1>
        <p className={Styles.description}>Full Stack Java Developer with 6 Months Experience

Skilled in Java, Spring Boot, and React.js, I’ve built responsive web applications and tackled complex challenges. Let’s connect to explore how I can contribute to your team!
            </p>
            <a href="mailto:ignatiusanton2111@gmail.com" className={Styles.contactBtn}>Contact Me</a>
      </div>
    <img src={getImageUrl("hero/heroImage.png")} alt="hero image of me" className={Styles.HeroImg}/>
   <div className={Styles.topBlur}/>
   <div className={Styles.bottomBlur}/>
  </section>
  );
  
};
