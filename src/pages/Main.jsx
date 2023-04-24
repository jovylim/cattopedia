import React from "react";
import { Link, NavLink } from "react-router-dom";
import styles from "./Main.module.css";

const Main = () => {
  return (
    <div className={styles.homepage}>
      <nav>
        <ul className={styles.menu}>
          <li>
            <NavLink className={styles.links} to="/random-cat">
              RANDOM CAT!!!!!
            </NavLink>
          </li>
          <li>
            <NavLink className={styles.links} to="/browse-breeds">
              Browse By Breeds
            </NavLink>
          </li>
          <li>
            <NavLink className={styles.links} to="/custom-search">
              Custom Search
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Main;
