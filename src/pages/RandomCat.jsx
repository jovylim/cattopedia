import React from "react";
import { useState, useEffect } from "react";
import styles from "./RandomCat.module.css";
import { Link, NavLink } from "react-router-dom";

const RandomCat = () => {
  const [data, setData] = useState([]);
  const [catUrl, setCatUrl] = useState("");

  const getData = async () => {
    const res = await fetch(import.meta.env.VITE_SERVER);
    const cat = await res.json();
    setData(cat);
  };

  const moreCat = () => {
    setCatUrl("");
    getData();
  };

  useEffect(() => {
    if (!catUrl) {
      data.map((item, idx) => {
        setCatUrl(item.url);
      });
    }
  }, [data]);

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className={styles.container}>
      <img className={styles.pic} src={catUrl}></img>
      <button
        className={styles.again}
        onClick={() => {
          moreCat();
        }}
      >
        one more cat!!!!!
      </button>
      <NavLink className={styles.home} to="/">
        back to home
      </NavLink>
    </div>
  );
};

export default RandomCat;
