import React from "react";
import styles from "./BreedListItem.module.css";

const BreedListItem = (props) => {
  console.log(props.data);
  return <div className={styles.breed}>{props.data.name}</div>;
};

export default BreedListItem;
