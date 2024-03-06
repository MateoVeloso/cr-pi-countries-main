import React, { useEffect } from "react";
import styles from "./Activity Card.module.css";
import axios from "axios";

  const ActivityCard = ({ activity, update }) => {

  const { name, difficulty, duration, season, Countries } = activity;

  const handleDelete = async () => {
    await axios.delete(`http://localhost:3001/activities/${activity.id}`);
    update();
  };

  return (
    <div className={styles.activityCard}>
      <div className={styles.headDiv}>
        <h2>{name}</h2>
        <button onClick={handleDelete}>X</button>
      </div>
      <div className={styles.details}>
        <div>
          <h4>Difficulty:</h4>
          <p>{difficulty}</p>
        </div>
        <div>
          <h4>Duration:</h4>
          <p>{duration ? duration+"hs" : "no estimate"}</p>
        </div>
        <div>
          <h4>Season:</h4>
          <p>{season}</p>
        </div>
      </div>
      <div>
        <h4 className={styles.countriesMargin}>Country/es:</h4>
        <div className={styles.flags}>
          {Countries.map((country, index) => (<React.Fragment key={index}>
              <a href={`http://localhost:5173/detail/${country.id}`}>
                <img src={country.flag} alt={country.name} title={country.name}/>
              </a>
            </React.Fragment>))}
        </div>
      </div>
    </div>
  );
};

export default ActivityCard;
