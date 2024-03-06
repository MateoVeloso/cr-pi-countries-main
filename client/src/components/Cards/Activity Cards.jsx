import ActivityCard from "../Card/Activity Card";
import paginate from "../Paginate/paginate";
import styles from "./Activity Cards.module.css";

const ActivityCards = ({ activities , update }) => {

  const { currentPage, currentItems, nextPage, prevPage, totalPages } = paginate(activities, 8);

  return (
    <div className={styles.container}>
      <h1>Your Activities:</h1>
      <div className={styles.activityContainer}>
        {currentItems.length > 0
          ? currentItems.map((activity) => (<ActivityCard key={activity.id} activity={activity} update={update}/>))
          : (<span className={styles.noAct}>No activity has been created yet...</span>)
        }
      </div>
      <div className={styles.pagination}>
        <button onClick={prevPage} disabled={currentPage === 1}>←</button>
        <span className={styles.pagNum}>{currentPage} of {totalPages !== 0 ? totalPages : 1}</span>
        <button onClick={nextPage} disabled={currentPage === totalPages}>→</button>
      </div>
    </div>
  );
};

export default ActivityCards;
