import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCountries, selectCountry, getActivitiesNames } from "../../redux/actions";
import validateField from "./validate";
import styles from "./Activity Form.module.css";


const ActivityForm = () => {

  const dispatch = useDispatch();

  const allCountries = useSelector((state) => state.allCountries);
  const activityNames = useSelector((state) =>state.activityNames.map((activity) => activity.name));
  
  useEffect(() => {
    dispatch(getAllCountries());
    dispatch(getActivitiesNames());
  }, [dispatch]);

  const [activityValues, setActivityValues] = useState({name: "", difficulty: "", duration: "", season: "", countriesId: []});
  const [errors, setErrors] = useState({
      name: "Type a name",
      difficulty: "Choose an option",
      season: "Choose an option",
      countriesId: "Choose at least one country"
    });

  const createActivity = async (formValues) => {
    try {
      const { data } = await axios.post("http://localhost:3001/activities", formValues);
      if (data.name) {
        alert("Activity Added");
        dispatch(getAllCountries());
        dispatch(getActivitiesNames());
        setErrors({
          name: "Type a name",
          difficulty: "Choose an option",
          season: "Choose an option",
          countriesId: "Choose at least one country"
      })
        setActivityValues({ name: "", difficulty: "", duration: "", season: "", countriesId: [] });
      }
    } catch (error) {
      error.response && error.response.data? alert(JSON.stringify(error.response.data, null, 2)): alert(error.message);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(errors);
    createActivity(activityValues);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    const fieldErrors = validateField(name, value, activityNames);
    setErrors({ ...errors, [name]: fieldErrors[name] });
    setActivityValues({...activityValues, [name]: value});
    console.log(errors);
  }

  const handleChangeCountries = (event) => {
    const selectedOptions = Array.from(event.target.selectedOptions, (option) => option.value);
    console.log(selectedOptions);
    const fieldErrors = validateField("countriesId", selectedOptions);
    console.log("fieldErrors: "+fieldErrors);
    setErrors({ ...errors, countriesId: fieldErrors.countriesId });
    setActivityValues({...activityValues, countriesId: [...selectedOptions]});
    dispatch(selectCountry(selectedOptions));
  };

  return (
    <div className={styles.bg}>
      <div className={styles.formContainer}>
        <h1 className={styles.title}>Create your Activity:</h1>
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
              <p className={styles.error}>{errors.name}</p>
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
                  difficulty...
                </option>
                <option value="1">1</option>
                <option value='2'>2</option>
                <option value='3'>3</option>
                <option value='4'>4</option>
                <option value='5'>5</option>
              </select>
              <p className={styles.error}>{errors.difficulty}</p>
            </div>
            <div>
              <label htmlFor="duration">Duration <small>{"(optional)"}</small>:</label>
              <input
                className={styles.formInput}
                type="number"
                name="duration"
                value={activityValues.duration}
                onChange={handleChange}
                placeholder="duration(hs)..."
              />
              <p className={styles.error}>{errors.duration}</p>
            </div>
            <div>
              <label htmlFor="season">Season:</label>
              <select
                className={styles.formSelect}
                name="season"
                value={activityValues.season}
                onChange={handleChange}
              >
                <option value="" disabled>
                  season...
                </option>
                <option value="summer">Summer</option>
                <option value="autumn">Autumn</option>
                <option value="winter">Winter</option>
                <option value="spring">Spring</option>
              </select>
              <p className={styles.error}>{errors.season}</p>
            </div>
            <div>
              <label htmlFor="countries">Choose countries: </label>
              <select
                className={styles.formSelect}
                name="countries"
                value={activityValues.countriesId}
                onChange={handleChangeCountries}
                multiple
              >
                {allCountries.map((country) => (
                  <option
                    value={country.id}
                    key={country.id}
                  >
                    {country.name}
                  </option>
                ))}
              </select>
              <p className={styles.error}>{errors.countriesId}</p>
            </div>
            <div className={styles.formButtonContainer}>
              <button 
                className={errors && Object.keys(errors).filter(key => errors[key] !== undefined).length === 0
                    ? styles.formButton
                    : styles.formButtonDisabled}
                type="submit"
                disabled={Object.keys(errors).filter(key => errors[key] !== undefined).length !== 0}
              >
                Create
              </button>
            </div>
          </form>
      </div>
    </div>
  );
};

export default ActivityForm;
