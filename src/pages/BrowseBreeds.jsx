import React from "react";
import BreedListItem from "../Components/BreedListItem";
import { useState, useEffect } from "react";
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
      {data.map((item) => {
        return <BreedListItem key={item.id} data={item}></BreedListItem>;
      })}
    </div>
  );
};

export default BrowseBreeds;
