import { useEffect, useState } from "react";
import ActivityCards from "../../components/Cards/Activity Cards";
import styles from "./Activities.module.css";
import axios from "axios";

const Activities = () => {
  const [activities, setActivities] = useState([]);

  const getAllActivities = async () => {
    try {
      const { data } = await axios("http://localhost:3001/activities");
      setActivities(data);
    } catch (error) {
      error.response && error.response.data
        ? alert(error.response.data)
        : alert(error.message);
    }
  };
  useEffect(() => {
    getAllActivities()
  }, []);

  return (
    <div className={styles.container}>
      <ActivityCards activities={activities} update={getAllActivities} />
    </div>
  );
};

export default Activities;
