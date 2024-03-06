import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import styles from "./Detail.module.css";

function formatNumber(number) {
  return number
    ? number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
    : "N/A";
}

const Detail = () => {
  const { id } = useParams();
  const [country, setCountry] = useState({});

  useEffect(() => {
    axios
      .get(`http://localhost:3001/countries/${id}`)
      .then(({ data }) => {
        if (data.name) {
          setCountry(data);
        }
      })
      .catch((error) => {
        console.error("Error fetching country:", error);
        setCountry({});
      });
  }, [id]);

  return (
    <div className={styles.detailContainer}>
    <div className={styles.detailBody}>
      <div className={styles.countryInfo}>
        <div>
          <h1>{country.name}</h1>
        </div>
        <div className={styles.flagContainer}>
          {country.flag && (<img src={country.flag} alt={country.name} className={styles.flagImage}/>)}{" "}
        </div>
      </div>
      <div className={styles.details}>
          <div>
            <h2><u>Capital:</u> {country.capital}</h2>
          </div>
        <div>
          <h2><u>Continent:</u> {country.continent}</h2>
        </div>
        <div>
          <h2><u>Subregion:</u> {country.subregion === "No subregion has been specified"? "No subregion has been specified": country.subregion}</h2>
        </div>
        <div>
          <h2><u>Area:</u> {formatNumber(country.area === null? "No area has been specified": `${country.area}km²`)}</h2>
        </div>
        <div>
          <h2><u>Population:</u> {formatNumber(country.population)}</h2>
        </div>
        <div>
          <h2>
            {country.Activities && country.Activities.length > 0 
              ? (<p>
                  <strong><u>Activities:</u></strong> {
                    country.Activities && country.Activities.length > 0 && (
                      <NavLink to="/activities" className={styles.link}>
                        <p>{country.Activities.map((activity) => activity.name).join(", ")}</p>
                      </NavLink>)}
                </p>) 
              : ("Activities: (no activity has been assigned)")}
          </h2>
          
        </div>
      </div>
    </div>
  </div>
  );
};

export default Detail;
