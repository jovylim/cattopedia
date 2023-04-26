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
              random cat !!!!!
            </NavLink>
          </li>
          <li>
            <NavLink className={styles.links} to="/kinda-random-cat">
              kinda random cat...?
            </NavLink>
          </li>
          <li>
            <NavLink className={styles.links} to="/browse-breeds">
              browse by breeds
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Main;
