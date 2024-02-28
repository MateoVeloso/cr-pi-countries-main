import React from "react";
import styles from "./Activity Card.module.css";
const ActivityCard = ({ activity }) => {
  const { name, difficulty, duration, season, countries } = activity;

  return (
    <div className={styles.activityCard}>
      <h2>{name}</h2>
      <div className={styles.details}>
        <div>
          <h4>Difficulty:</h4>
          <p>{difficulty}</p>
        </div>
        <div>
          <h4>Duration:</h4>
          <p>{duration}hs</p>
        </div>
        <div>
          <h4>Season:</h4>
          <p>{season}</p>
        </div>
      </div>
      <div>
        <h4 className={styles.countriesMargin}>Countries:</h4>
        <p className={styles.pMargin}>
          {countries?.map((country, index) => (
            <React.Fragment key={index}>
              {country.name}
              {index !== countries.length - 1 && ", "}
            </React.Fragment>
          ))}
        </p>
      </div>
    </div>
  );
};

export default ActivityCard;
