import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  filterByContinent,
  getActivitiesNames,
  getAllCountries,
  sortCountries,
} from "../../redux/actions";
import Cards from "../../components/Cards/Cards";
import styles from "./Home.module.css";
import resetBtn from "../../assets/icons/btn-reset.png";

const Home = () => {
  const refOrder = useRef(null);
  const refFilter = useRef(null);
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.allCountries);
  const searchResults = useSelector((state) => state.searchResults);
  const filteredResults = useSelector((state) => state.filteredResults);
  const activityNames = useSelector((state) =>
    state.activityNames.map((activity) => activity.name)
  );
  const showSearch = () => {
    if (searchResults.length > 0) return searchResults;
    return countries;
  };
  const filterResults = () => {
    if (filteredResults.length > 0) return filteredResults;
    return showSearch();
  };

  // const filterActivities = () => {
  //   if (activityNames.length > 0) return activityNames;
  //   return filterResults;
  // };
  useEffect(() => {
    dispatch(getAllCountries());
    dispatch(getActivitiesNames());
  }, [dispatch]);
  const handleFilterByContinent = (e) => {
    const value = e.target.value;
    dispatch(filterByContinent(value));
  };

  const handleOrder = (e) => {
    dispatch(handleOrder(e.target.value));
  };
  const handleSortCountries = (e) => {
    dispatch(sortCountries(e.target.value));
  };

  const resetFilters = () => {
    dispatch(filterByContinent("All"));
    refFilter.current.value = "";
    refOrder.current.value = "";
  };
  return (
    <div className={styles.homeBackground}>
      <div>
        <form>
          <div>
            <div className={styles.filterSection}>
              <label className={styles.filterLabels} htmlFor="Select Order">
                Select Order
              </label>
              <select
                className={styles.filterSelect}
                ref={refOrder}
                name="order"
                onChange={handleSortCountries}
                id="Select Order"
              >
                <option value="All">All</option>
                <optgroup label="Order by name">
                  <option value="Ascending">Name A-Z</option>
                  <option value="Descending">Name Z-A</option>
                </optgroup>
                <optgroup label="Order by population">
                  <option value="MaxPop">Max Pop</option>
                  <option value="MinPop">Min Pop</option>
                </optgroup>
                <optgroup label="Order by area">
                  <option value="MaxArea">Max Area</option>
                  <option value="MinArea">Min Area</option>
                </optgroup>
              </select>
              <label className={styles.filterLabels} htmlFor="Select Filter">
                Select Continent
              </label>
              <select
                className={styles.filterSelect}
                ref={refFilter}
                name="filter"
                onChange={handleFilterByContinent}
                id="Select Filter"
              >
                <optgroup label="Continents">
                  <option value="All">All</option>
                  <option value="Africa">Africa</option>
                  <option value="Antarctic">Antarctic</option>
                  <option value="Asia">Asia</option>
                  <option value="Europe">Europe</option>
                  <option value="Oceania">Oceania</option>
                  <option value="Americas">America</option>
                </optgroup>
              </select>
              <label className={styles.filterLabels} htmlFor="">
                Select Activities
              </label>
              <select name="" id="" className={styles.filterSelect}>
                <option value="All">All</option>
                {activityNames.map((activity) => (
                  <option key={activity}>{activity}</option>
                ))}
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
