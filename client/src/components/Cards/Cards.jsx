import React from "react";
import Card from "../Card/Card";
import styles from "./Cards.module.css";
import paginate from "../Paginate/paginate"

const Cards = ({ countries }) => {
  const { currentPage, currentItems, nextPage, prevPage, totalPages } = paginate(countries);
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Contry List:</h1>
      <div className={styles.cardsContainer}>
        {currentItems.map((country) => (<Card key={country.id} country={country} />))}
      </div>
      <div className={styles.pagination}>
        <button className={styles.paginationBtn} onClick={prevPage} disabled={currentPage === 1}>←</button>
        <span className={styles.pagNum}>{currentPage} of {totalPages}</span>
        <button className={styles.paginationBtn} onClick={nextPage} disabled={currentPage === totalPages}>→</button>
      </div>
    </div>
  );
}

export default Cards
