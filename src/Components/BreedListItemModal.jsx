import React from "react";
import ReactDOM from "react-dom";
import styles from "./BreedListItemModal.module.css";
import { useState } from "react";

const Overlay = (props) => {
  const data = props.breedData[0].breeds;
  const weightData = data[0].weight;
  console.log(weightData);

  const [currWeight, setCurrWeight] = useState(weightData.metric);
  const [currWeightType, setCurrWeightType] = useState("kg");
  const [changeWeightType, setChangeWeightType] = useState("pound");

  const changeWeight = () => {
    let tempWeightType = currWeightType;
    if (currWeightType === "kg") {
      setCurrWeight(weightData.imperial);
    } else {
      setCurrWeight(weightData.metric);
    }
    setCurrWeightType(changeWeightType);
    setChangeWeightType(tempWeightType);
  };

  return (
    <div className={styles.backdrop}>
      <div className={styles.modal}>
        <h1 className={styles.name}>{data[0].name}</h1>
        <img className={styles.picture} src={props.breedData[0].url}></img>
        <div className={`${styles.texts} ${styles.desc}`}>
          {data[0].description}
        </div>
        <div className={styles.texts}>Temperament: {data[0].temperament}</div>
        <div className={styles.texts}>
          Life Span (years): {data[0].life_span}
        </div>
        <div className={styles.texts}>Origin: {data[0].origin}</div>
        <div className={styles.weight}>
          <div className={styles.weightTexts}>
            Weight ({`${currWeightType}`}): {currWeight}
          </div>
          <button onClick={changeWeight}>
            change to {`${changeWeightType}`}
          </button>
        </div>
        <br />
        <button
          className={styles.close}
          onClick={() => props.setShowBreedListItemModal(false)}
        >
          close window
        </button>
      </div>
    </div>
  );
};

const BreedListItemModal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Overlay
          breedData={props.breedData}
          setShowBreedListItemModal={props.setShowBreedListItemModal}
        />,
        document.querySelector("#modal-root")
      )}
    </>
  );
};

export default BreedListItemModal;
