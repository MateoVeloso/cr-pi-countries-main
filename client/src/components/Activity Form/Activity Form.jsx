import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCountries, selectCountry } from "../../redux/actions";
import validateField from "./validate";
import styles from "./Activity Form.module.css";

const URL = "http://localhost:3001/activities";

const ActivityForm = () => {
  const [activityValues, setActivityValues] = useState({
    name: "",
    difficulty: "",
    duration: "",
    season: "",
    countriesId: [],
  });
  const [errors, setErrors] = useState({
    name: "",
    difficulty: "",
    duration: "",
    season: "",
    countriesId: "",
  });

  const [created, setCreated] = useState(false);
  const allCountries = useSelector((state) => state.allCountries);
  const [countriesCopied, setCountriesCopied] = useState([]);

  useEffect(() => {setCountriesCopied(allCountries)}, [allCountries]);

  const dispatch = useDispatch();

  const createActivity = async (formValues) => {
    try {
      const { data } = await axios.post(URL, formValues);
      if (data.name) {
        setCreated(true);
        alert("Activity created successfully");
        dispatch(getAllCountries());
      }
    } catch (error) {
      error.response && error.response.data? alert(JSON.stringify(error.response.data, null, 2)): alert(error.message);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    createActivity(activityValues);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setActivityValues({...activityValues, [name]: value});
    setErrors({...errors, [name]: validateField(name, value)});
  }

  const handleChangeCountries = (event) => {
    const selectedOptions = Array.from(event.target.selectedOptions, (option) => option.value);

    setActivityValues({...activityValues, countriesId: [...selectedOptions]});

    dispatch(selectCountry(selectedOptions));

    setErrors({...errors, countriesId: validateField("countriesId", selectedOptions)});
  };

  const handleClick = () => {
    setActivityValues({
      name: "",
      difficulty: "",
      duration: "",
      season: "",
      countriesId: [],
    });
    setErrors({
      name: "",
      difficulty: "",
      duration: "",
      season: "",
      countriesId: "",
    });
    setCreated(true);
  };

  return (
    <div className={styles.bg}>
      <div className={styles.formContainer}>
        <h1>Create an Activity:</h1>
        {!created ? (
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name">Name:</label>
              <input
                className={styles.formInput}
                type="text"
                name="name"
                value={activityValues.name}
                onChange={handleChange}
                placeholder="activity name..."
              />
              {errors.name && <p>{errors.name}</p>}
            </div>
            <div>
              <label className={styles.formLabel} htmlFor="difficulty">
                Difficulty:
              </label>
              <select
                className={styles.formSelect}
                name="difficulty"
                value={activityValues.difficulty}
                onChange={handleChange}
              >
                <option value="" disabled>
                  Difficulty
                </option>
                <option value="1">1</option>
                <option value='2'>2</option>
                <option value='3'>3</option>
                <option value='4'>4</option>
                <option value='5'>5</option>
              </select>
              {errors.difficulty && <p>{errors.difficulty}</p>}
            </div>
            <div>
              <label htmlFor="duration">Duration(hr):</label>
              <input
                className={styles.formInput}
                type="number"
                name="duration"
                value={activityValues.duration}
                onChange={handleChange}
                placeholder="How long did it last?"
              />
              {errors.duration && <span>{errors.duration}</span>}
            </div>
            <div>
              <label htmlFor="season">Select season:</label>
              <select
                className={styles.formSelect}
                name="season"
                value={activityValues.season}
                onChange={handleChange}
              >
                <option value="" disabled>
                  Select season
                </option>
                <option value="summer">Summer</option>
                <option value="autumn">Autumn</option>
                <option value="winter">Winter</option>
                <option value="spring">Spring</option>
              </select>
              {errors.season && <span>{errors.season}</span>}
            </div>
            <div>
              <label htmlFor="countries">Select country/es: </label>
              <select
                className={styles.formSelect}
                name="countries"
                value={activityValues.countriesId}
                onChange={handleChangeCountries}
                multiple
              >
                {countriesCopied.map((country) => (
                  <option
                    onChange={() => console.log("Country ID:", country.id)}
                    value={country.id}
                    key={country.id}
                  >
                    {country.name}
                  </option>
                ))}
              </select>
              {errors.countriesId && <span>{errors.countriesId}</span>}
            </div>
            <div className={styles.formButtonContainer}>
              <button className={styles.formButton} type="submit">
                Create Activity
              </button>
            </div>
          </form>
        ) : (
          <button className={styles.formButton} onClick={handleClick}>
            Do you want to create another activity?
          </button>
        )}
      </div>
    </div>
  );
};

export default ActivityForm;
