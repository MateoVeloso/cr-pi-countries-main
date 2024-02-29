import ActivityCard from "../Card/Activity Card";
import paginate from "../../Custom Hooks/paginate";
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
    paginate(filteredActivities, 8);

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
      <h1>These are the activities created so far:</h1>
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
