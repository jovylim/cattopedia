import React from "react";
import BreedListItem from "../Components/BreedListItem";
import Pagination from "../Pagination";
import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import styles from "./BrowseBreeds.module.css";

const BrowseBreeds = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    const res = await fetch("https://api.thecatapi.com/v1/breeds");
    const cat = await res.json();
    setData(cat);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className={styles.container}>
      <NavLink className={styles.home} to="/">
        back to home
      </NavLink>
      <br />
      {data.map((item) => {
        return (
          <BreedListItem
            key={item.id}
            name={item.name}
            id={item.id}
          ></BreedListItem>
        );
      })}
    </div>
  );
};

export default BrowseBreeds;
