import { SearchBar } from "../SearchBar/SearchBar";
import styles from './Navbar.module.css'
export const Nav = () => {
  return (
    <div className={styles.nav}>
      <SearchBar />
    </div>
  );
};
