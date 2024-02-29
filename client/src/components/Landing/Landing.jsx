import React from "react";
import { Link } from "react-router-dom";
import styles from "./Landing.module.css";

export default function Landing() {
  return (
    <div>
      <Link to="/home">
        <button className={styles.button}>Enter</button>
      </Link>
    </div>
  );
}
