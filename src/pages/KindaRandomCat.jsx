import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import styles from "./KindaRandomCat.module.css";

const KindaRandomCat = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    const res = await fetch("https://api.thecatapi.com/v1/categories");
    const cat = await res.json();
    setData(cat);
  };

  useEffect(() => {
    getData();
  }, []);

  console.log(data);

  return (
    <div className={styles.container}>
      <NavLink className={styles.home} to="/">
        back to home
      </NavLink>
      <div className={styles.selection}>
        <div>i want to see a cat in....</div>
        <select>
          {data.map((item, idx) => {
            return (
              <option key={idx} id={item.id}>
                {item.name}
              </option>
            );
          })}
        </select>
        <br />
        <button className={styles.now}>NOW!!!!!</button>
      </div>
    </div>
  );
};

export default KindaRandomCat;
