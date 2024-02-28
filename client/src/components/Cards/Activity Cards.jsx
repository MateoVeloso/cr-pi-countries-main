import ActivityCard from "../Card/Activity Card";
import usePagination from "../../Custom Hooks/usePagination";
import { useState } from "react";
import styles from "./Activity Cards.module.css";

/* eslint-disable react/prop-types */
const ActivityCards = ({ activities }) => {
  const [filters, setFilters] = useState({
    name: "",
    difficulty: "",
  });

  const [sortOrder, setSortOrder] = useState("asc"); // Default sorting order is ascending

  const filteredActivities = activities

  const { currentPage, currentItems, nextPage, prevPage, totalPages } =
    usePagination(filteredActivities, 6);

  const handleFilterChange = (filterName, value) => {
    setFilters({
      ...filters,
      [filterName]: value,
    });
  };

  const handleSortOrderChange = (value) => {
    setSortOrder(value);
  };
  return (
    <div className={styles.container}>
      <h2>These are the activities created so far:</h2>
      <div className={styles.filters}>
        <input
          className={styles.inputActivities}
          type="text"
          placeholder="Filter by Name"
          value={filters.name}
          onChange={(e) => handleFilterChange("name", e.target.value)}
        />
        <select
          className={styles.filterSelect}
          value={filters.difficulty}
          onChange={(e) => handleFilterChange("difficulty", e.target.value)}
        >
          <option value="">Filter by Difficulty</option>
          <option value='1'>1 (Easy)</option>
          <option value='2'>2 (Easy - Medium)</option>
          <option value='3'>3 (Medium)</option>
          <option value='4'>4 (Medium - Hard)</option>
          <option value='5'>5 (Hard)</option>
        </select>
        <select
          className={styles.filterSelect}
          value={sortOrder}
          onChange={(e) => handleSortOrderChange(e.target.value)}
        >
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
      </div>
      <div className={styles.activityContainer}>
        {currentItems.map((activity) => (
          <ActivityCard key={activity.id} activity={activity} />
        ))}
      </div>
      <div className={styles.pagination}>
        <button onClick={prevPage} disabled={currentPage === 1}>
          Previous
        </button>
        <span className={styles.pagNum}>
          Page {currentPage} of {totalPages}
        </span>
        <button onClick={nextPage} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    </div>
  );
};

export default ActivityCards;
