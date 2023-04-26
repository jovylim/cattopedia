import React from "react";
import ReactDOM from "react-dom";
import styles from "./BreedListItemModal.module.css";
import { useState } from "react";

const Overlay = (props) => {
  const data = props.breedData[0].breeds;
  const weightData = data[0].weight;
  const ratingsData = [
    { name: "Adaptability", value: data[0].adaptability },
    { name: "Affection Level", value: data[0].affection_level },
    { name: "Child Friendliness", value: data[0].child_friendly },
    { name: "Dog Friendliness", value: data[0].dog_friendly },
    { name: "Energy Level", value: data[0].energy_level },
    { name: "Hypoallergenic", value: data[0].hypoallergenic },
    { name: "Intelligence", value: data[0].intelligence },
    { name: "Shedding Level", value: data[0].shedding_level },
    { name: "Social Needs", value: data[0].social_needs },
    { name: "Stranger Friendly", value: data[0].stranger_friendly },
    { name: "Vocalisation", value: data[0].vocalisation },
  ];

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

        <div className={`${styles.texts} row`}>
          <div className="col-md-4">Origin:</div>
          <div className="col-md-8">{data[0].origin}</div>
        </div>

        <div className={`${styles.texts} row`}>
          <div className="col-md-4">Temperament:</div>
          <div className="col-md-8">{data[0].temperament}</div>
        </div>

        <div className={`${styles.texts} row`}>
          <div className="col-md-4">Weight ({`${currWeightType}`}):</div>
          <div className="col-md-4">{currWeight}</div>
          <button
            className={`col-md-4 ${styles.weightButton}`}
            onClick={changeWeight}
          >
            change to {`${changeWeightType}`}
          </button>
        </div>

        <div className={`${styles.texts} row`}>
          <div className="col-md-4">Life Span (years):</div>
          <div className="col-md-8">{data[0].life_span}</div>
        </div>

        {ratingsData.map((item, idx) => {
          return (
            <div key={idx} className={`${styles.texts} row`}>
              <div className="col-md-4">{item.name}:</div>
              <img
                className={`${styles.ratingPics} col-md-8`}
                src={`./pictures/ratings/${item.value}cats.png`}
              ></img>
            </div>
          );
        })}

        <br />
        <button
          className={styles.close}
          onClick={() => props.setShowBreedListItemModal(false)}
        >
          close window
        </button>
        <br />
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
