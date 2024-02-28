import React from "react";
import { Link } from "react-router-dom";
import styles from "./Card.module.css"; // Import CSS file for styling

const Card = ({ country }) => {
  return (
    <div>
      <Link to={`/detail/${country.id}`} className={styles.cardLink}>
        <div className={styles.card}>
          <div className={styles.cardContent}>
            <img
              src={country.flag}
              alt="Flag"
              className={styles.cardImage}
            />
            <div className={styles.cardText}>
              <h2 className={styles.cardTitle}>{country.name}</h2>
              <p className={styles.cardSubText}>
                <strong>Continent:</strong> {country.continent}
              </p>
              <p className={styles.cardSubText}><strong>Capital:</strong> {country.capital}</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Card;
