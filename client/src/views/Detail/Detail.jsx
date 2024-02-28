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
          <div className={styles.flagContainer}>
            {country.flag && (
              <img
                src={country.flag}
                alt={country.name}
                className={styles.flag}
              />
            )}{" "}
            <div>
              <h1>{country.name}</h1>
            </div>
            <div>
              <h2>Capital:</h2>
              <p>{country.capital}</p>
            </div>
          </div>
          <div className={styles.details}>
            <div>
              <h2>Continent:</h2>
              <p>{country.continent}</p>
            </div>
            <div>
              <h2>Subregion:</h2>
              <p>
                {country.subregion === "No subregion has been specified"
                  ? "No subregion has been specified"
                  : country.subregion}
              </p>
            </div>
            <div>
              <h2>Area:</h2>
              <p>
                {formatNumber(
                  country.area === null
                    ? "No area has been specified"
                    : `${country.area}km²`
                )}
              </p>
            </div>
            <div>
              <h2>Population:</h2>
              <p>{formatNumber(country.population)}</p>
            </div>
            <div>
              <h2>
                {country.activities && country.activities.length > 0 ? (
                  <strong>Activities:</strong>
                ) : (
                  "Activities:"
                )}
              </h2>
              {country.activities && country.activities.length > 0 && (
                <NavLink to="/activities" className={styles.link}>
                  <p>
                    {country.activities
                      .map((activity) => activity.name)
                      .join(", ")}
                  </p>
                </NavLink>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
