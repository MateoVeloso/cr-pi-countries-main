import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { searchCountry } from "../../redux/actions";
import styles from "./SearchBar.module.css"; // Import CSS Modules styles
import { NavLink } from "react-router-dom";

export const SearchBar = () => {
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (term) => {
    dispatch(searchCountry(term));
  };

  const onChange = (e) => {
    const { value } = e.target;
    setSearchTerm(value);
    handleSearch(value);
  };

  return (
    <div className={styles.container}>
      <NavLink to="/home">
        <button className={styles.searchBarBtns}>Home</button>
      </NavLink>
      <NavLink to="/about">
        <button className={styles.searchBarBtns}>About</button>
      </NavLink>
      <input
        className={styles.searchInput}
        type="text"
        placeholder="Enter any country name"
        value={searchTerm}
        onChange={onChange}
      />
      <NavLink to="/form">
        <button className={styles.searchBarBtns}>Create Activity</button>
      </NavLink>
      <NavLink to="/activities">
        <button className={styles.searchBarBtns}>Activities</button>
      </NavLink>
      <NavLink to="/">
        <button className={styles.logOutBtn}>Logout</button>
      </NavLink>
    </div>
  );
};
