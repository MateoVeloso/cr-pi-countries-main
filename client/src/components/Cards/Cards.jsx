// Cards.jsx
import React from "react";
import Card from "../Card"; // Assuming Card component is in the same directory
import styles from "./Cards.module.css";
import usePagination from "../../Custom Hooks/usePagination"; // custom hook to separate the logic and modularize

const Cards = ({ countries }) => {
  const { currentPage, currentItems, nextPage, prevPage, totalPages } =
    usePagination(countries, 10);

  return (
    <div className={styles.container}>
      <div className={styles.cardsContainer}>
        {currentItems.map((country) => (
          <Card key={country.id} country={country} />
        ))}
      </div>
      <div className={styles.pagination}>
        <button
          className={styles.paginationBtn}
          onClick={prevPage}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span className={styles.pagNum}>
          {currentPage} of {totalPages}
        </span>
        <button
          className={styles.paginationBtn}
          onClick={nextPage}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Cards; // Export the Cards component
