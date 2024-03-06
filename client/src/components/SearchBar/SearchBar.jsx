import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { searchCountry } from "../../redux/actions";
import styles from "./SearchBar.module.css";
import { NavLink, useLocation } from "react-router-dom";

export const SearchBar = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (term) => {
    dispatch(searchCountry(term));
  };

  const onChange = (e) => {
    const { value } = e.target;
    setSearchTerm(value);
    handleSearch(value);
  };

  useEffect(() => {setSearchTerm("")}, [location]);

  return (
    <div className={styles.container}>
      <NavLink to="/home">
        <button className={styles.searchBarBtns}>Home</button>
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
    </div>
  );
};
