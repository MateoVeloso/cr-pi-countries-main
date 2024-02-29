import React from "react";
import Landing from "../../components/Landing/Landing";
import styles from "./Landing.module.css";

const LandingPage = () => {
  return (
    <div className={styles.landingContainer}>
      <div className={styles.contentContainer}>
        <h1 className={styles.title}>Countries-PI by Mateo Veloso(ft46b)</h1>
        <div className={styles.loginSection}>
          <Landing />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
