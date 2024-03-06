import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  filters,
  getActivitiesNames,
  getAllCountries,
  sortCountries
} from "../../redux/actions";
import Cards from "../../components/Cards/Cards";
import styles from "./Home.module.css";
import resetBtn from "../../assets/icons/btn-reset.png";
import { useLocation } from "react-router-dom";

const Home = () => {
  const refOrder = useRef("Ascending");
  const refContinent = useRef("ALL");
  const refActivity = useRef("ALL");

  const dispatch = useDispatch();
  const location = useLocation()
  
  const countries = useSelector((state) => state.allCountries);
  const filteredResults = useSelector((state) => state.filteredResults);
  const activityNames = useSelector((state) =>state.activityNames.map((activity) => activity.name));

  const handleSortCountries = (e) => {
    dispatch(sortCountries(e.target.value))
    dispatch(filters(refContinent.current.value, refActivity.current.value))
  }

  const handleFilterActivity = (e) => {
    const value = e.target.value;
    dispatch(filters(refContinent.current.value, value));
  }

  const handleFilterByContinent = (e) => {
    const value = e.target.value;
    dispatch(filters(value, refActivity.current.value));
  }

  const filterResults = () => {
    if (filteredResults === "noResults") return [];
    if (filteredResults.length > 0) return filteredResults;
    return countries;
  }

  const resetFilters = () => {
    refContinent.current.selectedIndex = 0;
    refActivity.current.selectedIndex = 0;
    refOrder.current.selectedIndex = 0;
    dispatch(sortCountries(refOrder.current.value))
    dispatch(filters(refContinent.current.value, refActivity.current.value))
  };

  useEffect(() => {
    dispatch(filters(refContinent.current.value, refActivity.current.value));
  }, [countries]);  

  useEffect(resetFilters, [location])

  useEffect(() => {
    dispatch(getAllCountries());
    dispatch(getActivitiesNames());
  }, [dispatch]);

  return (
    <div className={styles.homeBackground}>
      <div>
        <form>
          <div>
            <div className={styles.filterSection}>
              <label className={styles.filterLabels} htmlFor="Select Order">
                Order
              </label>
              <select
                className={styles.filterSelect}
                ref={refOrder}
                name="order"
                onChange={handleSortCountries}
                id="Select Order"
              >
                <optgroup label="Order by name">
                  <option value="Ascending" selected>A-Z</option>
                  <option value="Descending">Z-A</option>
                </optgroup>
                <optgroup label="Order by population">
                  <option value="MaxPop">from higher Pop</option>
                  <option value="MinPop">from lower Pop</option>
                </optgroup>
                <optgroup label="Order by area">
                  <option value="MaxArea">from largest</option>
                  <option value="MinArea">from smallest</option>
                </optgroup>
              </select>
              <label className={styles.filterLabels} htmlFor="Select Filter">
                Filter by Continent
              </label>
              <select
                className={styles.filterSelect}
                ref={refContinent}
                name="filter"
                onChange={handleFilterByContinent}
                id="Select Filter"
              >
                <optgroup label="Continents">
                  <option value="All">All</option>
                  <option value="Africa">Africa</option>
                  <option value="Americas">America</option>
                  <option value="Antarctic">Antarctic</option>
                  <option value="Asia">Asia</option>
                  <option value="Europe">Europe</option>
                  <option value="Oceania">Oceania</option>
                </optgroup>
              </select>
              <label className={styles.filterLabels}>
                Filter by Activity
              </label>
              <select 
                className={styles.filterSelect}
                ref={refActivity}
                onChange={handleFilterActivity}
              >
                <option value="All">All</option>
                {activityNames.map((activity) => (<option key={activity}>{activity}</option>))}
              </select>
              <button className={styles.filterResetBtn} onClick={resetFilters}>
                <img
                  src={resetBtn}
                  alt="Reset Filters"
                  style={{ width: "15px", height: "15px" }}
                />
              </button>
            </div>
          </div>
        </form>
        <div>
          <Cards countries={filterResults()} />
        </div>
      </div>
    </div>
  );
};

export default Home;
