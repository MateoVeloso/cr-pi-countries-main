import React from "react";
import { Link } from "react-router-dom";
import styles from "./Landing.module.css";

export default function Landing() {
  return (
    <div className={styles.pageContainer}>
      <Link to="/home">
        <button>Enter</button>
      </Link>
    </div>
  );
}
