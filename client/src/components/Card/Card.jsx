import React from "react";
import { Link } from "react-router-dom";
import styles from "./Card.module.css";

const Card = ({ country }) => {
  return (
    <div>
      <Link to={`/detail/${country.id}`} className={styles.cardLink}>
        <div className={styles.card}>
          <h2 className={styles.cardTitle}>{country.name}</h2>
          <div className={styles.cardContent}>
            <img src={country.flag} alt="Flag"  className={styles.cardImage}/>
            <div className={styles.cardText}>
              <p className={styles.cardText}><strong>Capital:</strong> {country.capital}</p>
              <p className={styles.cardText}><strong>Continent:</strong> {country.continent}</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Card;
