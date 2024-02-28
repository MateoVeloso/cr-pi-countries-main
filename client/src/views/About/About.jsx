import React from "react";
import styles from "./About.module.css";

const About = () => {
  return (
    <div className={styles.bodyAbout}>
      <div className={styles.container}>
        <h1>About Me</h1>
        <p>
          Hello, I'm Nicolás de Prat Gay, a 24-year-old web developer with a
          passion for crafting engaging and functional online experiences. My
          journey into the world of programming began this year, and since then,
          I've been immersed in the fascinating realm of web development.
        </p>
        <h2>Tech Stack:</h2>
        <ul className={styles.techList}>
          <li>React.js</li>
          <li>||</li>
          <li>JavaScript</li>
          <li>||</li>
          <li>Node.js</li>
          <li>||</li>
          <li>Express.js</li>
          <li>||</li>
          <li>PostrgreSQL</li>
        </ul>
        <h2>My Focus:</h2>
        <p>
          I specialize in the development of dynamic and responsive websites,
          ensuring seamless user experiences. Collaborating with SoyHenry, I am
          currently working on this exciting project.
        </p>
        <h2>About this project:</h2>
        <p>
          Welcome to my personal project, where you can explore 250
          countries effortlessly. Our intuitive search, filter, and sorting
          features make finding information a breeze. Plus, create personalized
          activities tied to your favorite countries with our easy-to-use form.
          Start your global adventure today!
        </p>
        <h2>Let's Connect:</h2>
        <div>
          <ul className={styles.socList}>
            <li>
              <a href="https://www.instagram.com/nicopratgay/" target="_blank">
                <button className={styles.socIg}></button>
              </a>
            </li>
            <li>
              <a href="https://twitter.com/drdeprat" target="_blank">
                <button className={styles.socTw}></button>
              </a>
            </li>
            <li>
              <a href="mailto:ndepratg@gmail.com" target="_blank">
                <button className={styles.socMail}></button>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/nicol%C3%A1s-d-423575122/"
                target="_blank"
              >
                <button className={styles.socLkdn}></button>
              </a>
            </li>
            <li>
              <a
                href="https://api.whatsapp.com/send?phone=5491169114533"
                target="_blank"
              >
                <button className={styles.socWpp}></button>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
