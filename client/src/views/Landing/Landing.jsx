import React from "react";
import Login from "../../components/Login/Login";
import styles from "./Landing.module.css";

const Landing = () => {
  return (
    <div className={styles.landingContainer}>
      <div className={styles.contentContainer}>
        <h1 className={styles.title}>Countries Individual Project</h1>
        <div className={styles.loginSection}>
          <Login />
        </div>
      </div>
    </div>
  );
};

export default Landing;
